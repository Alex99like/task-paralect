import { Flex } from "@mantine/core"
import { CardJobs } from "../components/ListJobs/CardJobs"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../hooks/useAppSelector"
import { Description } from "../components/Description/Description"

export const Vacation = () => {
  const { vacations } = useAppSelector(state => state.jobs)
  const { id } = useParams()
  
  const data = !!id && vacations.find(el => +id === el.id)

  return (
    <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773, margin: '24px auto' }} direction={'column'}>
      {data && <CardJobs {...data} />}
      {data && <Description html={data.vacancyRichText} />}
    </Flex>
  )
}
