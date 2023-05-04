import { Flex } from '@mantine/core'
import { Form } from '../components/Form/Form'
import { Search } from '../components/Form/Search'

export const Jobs = () => {
  return (
    <Flex mt={24} justify={'center'} columnGap={28}>
      <Form />
      <Flex>
        <Search />
      </Flex>
    </Flex>
  )
}
