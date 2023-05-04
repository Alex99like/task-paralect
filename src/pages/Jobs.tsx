import { Button, Flex } from '@mantine/core'
import { Form } from '../components/Form/Form'
import { Search } from '../components/Form/Search'
import { useForm } from '@mantine/form'

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
  

  return (
    <Flex justify={'center'} columnGap={28} style={{ margin: '24px auto' }}>
      <Form form={form} />
      <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773 }}>
        <Search form={form} />
        <Button onClick={() =>console.log(form.values)}>Call</Button>
      </Flex>
    </Flex>
  )
}
