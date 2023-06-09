import { Flex, Loader } from "@mantine/core"
import { CardJobs } from "../components/ListJobs/CardJobs"
import { useParams } from "react-router-dom"
import { Description } from "../components/Description/Description"
import { useEffect, useState } from "react"
import { JobsService } from "../service/JobsService"
import { IVacation } from "../types/vacantion.type"
import { useLocation } from 'react-router-dom'
import { useStyleVacation } from "./pages.style"
import { NoData } from "../components/NoData/NoData"

export const Vacation = () => {
  const { id } = useParams()
  const [vac, setVac] = useState<IVacation | null>(null)
  const [loading, setLoading] = useState(true)
  const { state } = useLocation()
  const { classes } = useStyleVacation()

  const getVacation = async (id: string) => {
    try {
      const data = await JobsService.getVacationId(id)
    
      setVac(data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
    
  }

  useEffect(() => {
    if (!state && id) {
      getVacation(id)
    } else {
      setVac(state || null)
      setLoading(false)
    }
  }, [state, id])

  if (loading)
    return <Flex justify={'center'}><Loader w={'30%'} mt={50} size={10} variant="bars" /></Flex>
  else
    return (
      <>
        {vac ? (
          <Flex className={classes.wrapper}>
            {vac && <CardJobs vacation={vac} variant="vacation" />}
            {vac && <Description html={vac.vacancyRichText} />}
          </Flex>
        ) : (
          <NoData />
        )}
      </>
    )
}
