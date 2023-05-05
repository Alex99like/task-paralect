import { Flex } from '@mantine/core'
import { CardJobs } from './CardJobs'
import { useAppSelector } from '../../hooks/useAppSelector'

export const ListJobs = () => {
  const { vacations } = useAppSelector(state => state.jobs)
  
  return (
    <Flex w={'100%'} direction={'column'} gap={16} mt={16}>
      {vacations.map(card => <CardJobs key={card.firm_name} {...card} />)}
    </Flex>
  )
}
