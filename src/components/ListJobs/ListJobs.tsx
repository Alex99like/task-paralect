import { Flex } from '@mantine/core'
import { CardJobs } from './CardJobs'
import { IVacation } from '../../types/vacantion.type'

export const ListJobs = ({ vacations }: { vacations: IVacation[] }) => {
  
  return (
    <Flex w={'100%'} direction={'column'} gap={16} mt={16}>
      {vacations.map(card => (
        <CardJobs 
          key={card.id} 
          vacation={card} 
          variant='standard' 
        />
      ))}
    </Flex>
  )
}
