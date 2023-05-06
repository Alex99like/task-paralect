import { Flex } from "@mantine/core"
import { CardJobs } from "../components/ListJobs/CardJobs"
import { useParams } from "react-router-dom"
import { Description } from "../components/Description/Description"
import { useEffect, useState } from "react"
import { JobsService } from "../service/JobsService"
import { IVacation } from "../types/vacantion.type"
import { useLocation } from 'react-router-dom'

export const Vacation = () => {
  //const { vacations } = useAppSelector(state => state.jobs)
  const { id } = useParams()
  const [vac, setVac] = useState<IVacation | null>(null)
  const { state } = useLocation()
  console.log(state)
  //const data = !!id && vacations.find(el => +id === el.id)

  const getVacation = async (id: string) => {
    const data = await JobsService.getVacationId(id)
    setVac(data)
  }

  useEffect(() => {
    if (!state && id) {
      getVacation(id)
    } else {
      setVac(state || null)
    }
  }, [state, id])

  return (
    <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773, margin: '24px auto' }} direction={'column'}>
      {vac && <CardJobs {...vac} />}
      {vac && <Description html={vac.vacancyRichText} />}
    </Flex>
  )
}
