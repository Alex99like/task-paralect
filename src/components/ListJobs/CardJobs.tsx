import { Card, Title, Text, Box } from '@mantine/core'
import { IVacation } from "../../types/vacantion.type"
import { useCardStyle } from './list-jobs.type'

export const CardJobs = ({ profession, currency, payment_to, payment_from, type_of_work }: IVacation) => {
  const { classes } = useCardStyle()

  return (
    <Card
      p={22.5}
      className={classes.wrapper} 
    >
      <Title
        order={3}
        className={classes.title}
      >{profession}</Title>
      <Box display={'flex'} style={{ gap: 12, color: '#7B7C88' }} mt={8}>
        <Text className={classes.price}>з/п от {payment_from} {currency}</Text>
        •
        <Text className={classes.typeWork}>{type_of_work.title}</Text>
      </Box>
    </Card>
  )
}
