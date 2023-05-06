import { Card, Text, Box, Flex } from '@mantine/core'
import { IVacation } from "../../types/vacantion.type"
import { useCardStyle } from './list-jobs.type'
import { CustomIcon } from '../../utils/CustomIcon'
import { Link } from 'react-router-dom'
import { parseSalary } from '../../utils/string'
import { StarIcon } from '../../utils/StarIcon'

export const CardJobs = ({ profession, id, currency, payment_from, payment_to, town, type_of_work }: IVacation) => {
  const { classes } = useCardStyle()

  return (
    <Card
      pt={20}
      pl={22}
      className={classes.wrapper} 
    >
      <Flex justify={'space-between'}>
        <Link
          to={`vacation/${id}`}
          className={classes.title}
        >{profession} </Link>
        <StarIcon active={false} />
      </Flex>
      <Box display={'flex'} style={{ gap: 12, color: '#7B7C88' }} mt={8}>
        <Text className={classes.price}>{parseSalary(payment_from, payment_to, currency)}</Text>
        •
        <Text className={classes.typeWork}>{type_of_work.title}</Text>
      </Box>
      <Box display={'flex'} style={{ gap: 10 }} mt={8}>
        <CustomIcon name='location' width={20} height={20} />
        <Text className={classes.description}>{town.title}</Text>
      </Box>
    </Card>
  )
}
