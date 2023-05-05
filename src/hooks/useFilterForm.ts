import { useForm } from "@mantine/form"
import { useState } from "react"
import { IFormJob } from "../pages/Jobs"
import { useActions } from "./useActions"
import { useAppSelector } from "./useAppSelector"

export const useFilterForm = () => {
  const { totalPage } = useAppSelector(state => state.jobs)
  const { setVacations, setPage } = useActions()

  const form = useForm<IFormJob>({
    initialValues: {
      search: '',
      filter: {
        industry: '',
        salary: {
          from: 0,
          to: 0
        }
      }
    }
  })

  const [stateForm, setStateForm] = useState<IFormJob>()
}