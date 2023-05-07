import { Flex } from "@mantine/core"
import { CustomIcon } from "../../utils/CustomIcon"
import { Text } from '@mantine/core'
import { useNoDataStyle } from "./noData.type"
import { Link } from "react-router-dom"

export const NoData = () => {
  const { classes } = useNoDataStyle()

  return (
    <Flex direction={'column'} mt={105} align={'center'}>
      <CustomIcon 
        classNames={{ 
          imageWrapper: classes.imageWrapper,
        }} 
        name="noData" 
      />
      <Text className={classes.wrapper}>Упс, здесь еще ничего нет!</Text>
      <Link className={classes.link} to={'/'}>Поиск Вакансий</Link>
    </Flex>
  )
}
