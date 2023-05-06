import { Flex, Loader } from '@mantine/core'
import { Form } from '../components/Form/Form'
import { Search } from '../components/Form/Search'
import { useForm } from '@mantine/form'
import { ListJobs } from '../components/ListJobs/ListJons';
import { useAppSelector } from '../hooks/useAppSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';
import { Pagination } from '../components/Pagination/Pagination';

export interface IFormJob {
  search: string;
  filter: {
    industry: string | null;
    salary: {
      from: number;
      to: number;
    };
  };
}

export const Jobs = () => {
  const { totalPage, countPage, loading } = useAppSelector(state => state.jobs)
  const { setVacations, setPage } = useActions()

  const form = useForm<IFormJob>({
    initialValues: {
      search: '',
      filter: {
        industry: '',
        salary: {
          from: 0,
          to: 0
        }
      }
    }
  })

  const change = (page: number) => {
    setPage(page)
    setVacations({ page: countPage, ...form.values })
  }

  const submit = () => {
    setVacations({ page: countPage, ...form.values })
  }

  useEffect(() => {
    setVacations({ page: countPage, ...form.values })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Flex justify={'center'} columnGap={28} style={{ margin: '24px auto' }}>
      <Form form={form} submit={submit} />
      <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773 }} direction={'column'}>
        <Search form={form} submit={submit} />
          {!loading ? (
            <Loader variant="bars" w={'30%'} m={'70px auto'} /> 
          ) : (
            <>
              <ListJobs />
              <Pagination totalCount={totalPage} page={countPage} change={change} />
            </>
          )
        }
      </Flex>
    </Flex>
  )
}
