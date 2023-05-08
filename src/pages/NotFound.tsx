import { Title, Flex, Text } from '@mantine/core'
import { CustomIcon } from '../components/shared/CustomIcon'
import { useStyleNotFound } from './pages.style'

export const NotFound = () => {
  const { classes } = useStyleNotFound()

  return (
    <Flex className={classes.wrapper}>
      <CustomIcon width={300} name='empty'/>
      <Title className={classes.title}>404</Title>
      <Text className={classes.text}>Здесь ничего нет :)</Text>
    </Flex>
  )
}
