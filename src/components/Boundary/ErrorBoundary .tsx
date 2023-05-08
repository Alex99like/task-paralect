import { Flex, Title } from "@mantine/core"
import { Layout } from "../Layout/Layout"
import { CustomIcon } from "../shared/CustomIcon"

export const ErrorBoundary  = () => {
  return (
    <Layout>
      <Flex align={'center'} direction={'column'} mt={40}>
        <CustomIcon name="boundary" width={310} styles={{ image: { borderRadius: 20 } }} />
        <Title style={{ textAlign: 'center', color: '#5E96FC' }}>Упс что то сломалось :(</Title>
      </Flex>
    </Layout>
  )
}
