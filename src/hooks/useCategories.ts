import { useEffect, useState } from "react"
import { useActions } from "./useActions"
import { useAppSelector } from "./useAppSelector"

type IOption = { label: string, value: string }

export const useCategories = () => {
  const [options, setOptions] = useState<Array<IOption>>([])
  const { setCatagories } = useActions()
  const { categories } = useAppSelector(state => state.jobs)

  useEffect(() => {
    setCatagories()
  }, [setCatagories])

  useEffect(() => {
    setOptions(() => categories.map((el) => ({ value: `${el.key}`, label: el.title_rus })))
    console.log(categories)
  }, [categories])

  return options
}