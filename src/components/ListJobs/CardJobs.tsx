import { Card, Text, Box, Flex } from '@mantine/core'
import { IVacation } from "../../types/vacantion.type"
import { useCardStyle } from './list-jobs.type'
import { CustomIcon } from '../../utils/CustomIcon'
import { Link } from 'react-router-dom'
import { parseSalary } from '../../utils/string'
import { StarIcon } from '../../utils/StarIcon'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'

export const CardJobs = (vacation: IVacation) => {
  const { profession, id, currency, payment_from, payment_to, town, type_of_work } = vacation
  const { classes } = useCardStyle()
  const { favorites } = useAppSelector(state => state.jobs)
  const { addFavorites, removeFavorites } = useActions()
  
  const changeFav = () => {
    if (favorites.find((el) => el.id === id)) return removeFavorites(vacation)
    else return addFavorites(vacation)
  }

  return (
    <Card
      pt={20}
      pl={22}
      className={classes.wrapper} 
    >
      <Flex justify={'space-between'}>
        <Link
          state={vacation}
          to={`/vacation/${id}`}
          className={classes.title}
        >{profession} </Link>
        <StarIcon addFav={changeFav} active={!!favorites.find(el => id === el.id)} />
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
