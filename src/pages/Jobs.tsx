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
  industry: string | null;
  from: number | undefined | '';
  to: number | undefined | '';
}

export const Jobs = () => {
  const { totalPage, countPage, loading, form: formValues, vacations } = useAppSelector(state => state.jobs)
  const { setVacations, setPage, setFormValues } = useActions()

  const form = useForm<IFormJob>({
    initialValues: { ...formValues }
  })

  const change = (page: number) => {
    setPage(page)
    setVacations({ page: countPage, ...form.values })
  }

  const submit = () => {
    setFormValues({ ...form.values })
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
              <ListJobs vacations={vacations} />
              <Pagination totalCount={totalPage} page={countPage} change={change} />
            </>
          )
        }
      </Flex>
    </Flex>
  )
}
