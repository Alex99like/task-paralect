import { Card, Text, Box, Title, Flex } from '@mantine/core'
import { IVacation } from "../../types/vacantion.type"
import { useCardStyle } from './list-jobs.type'
import { CustomIcon } from '../../utils/CustomIcon'
import { Link } from 'react-router-dom'
import { parseSalary } from '../../utils/string'
import { StarIcon } from '../../utils/StarIcon'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'

export const CardJobs = ({ vacation, variant }: { vacation: IVacation, variant: 'vacation' | 'standard' }) => {
  const { profession, id, currency, payment_from, payment_to, town, type_of_work } = vacation
  
  const { classes, cx } = useCardStyle()

  const { favorites } = useAppSelector(state => state.jobs)
  const { addFavorites, removeFavorites } = useActions()
  
  const changeFav = () => {
    if (favorites.find((el) => el.id === id)) return removeFavorites(vacation)
    else return addFavorites(vacation)
  }

  const title = (vac: string) => {
    if (vac === 'standard') {
      return (
        <Link
          state={vacation}
          to={`/vacation/${id}`}
          className={classes.title}
        >{profession} </Link>
      )
    } else {
      return (
        <Title className={classes.titleVacation}>{profession} </Title>
      )
    }
  }

  return (
    <Card
      pt={variant === 'standard' ? 20 : 22}
      pl={22}
      className={cx({
        [classes.wrapper]: variant === 'standard',
        [classes.wrapperVacation]: variant === 'vacation' 
      })} 
    >
      <Flex justify={'space-between'}>
        {title(variant)}
        <StarIcon addFav={changeFav} active={!!favorites.find(el => id === el.id)} />
      </Flex>
      <Box className={cx({
        [classes.boxWrap]: variant === 'standard',
        [classes.boxWrapVacation]: variant === 'vacation'
      })}>
        <Text 
          className={cx({ 
            [classes.price]: variant === 'standard',
            [classes.priceVacation]: variant === 'vacation' 
          })}
        >{parseSalary(payment_from, payment_to, currency)}
        </Text>
        •
        <Text 
          className={cx({
            [classes.typeWork]: variant === 'standard',
            [classes.typeWorkVacation]: variant === 'vacation'
          })}
        >{type_of_work.title}
        </Text>
      </Box>
      <Box 
        display={'flex'} 
        style={{ gap: 8, alignItems: 'center' }} 
        ml={1} 
        mt={variant === 'standard' ? 8 : 10}
      >
        <CustomIcon name='location' width={20} height={20} />
        <Text className={classes.description}>{town.title}</Text>
      </Box>
    </Card>
  )
}
