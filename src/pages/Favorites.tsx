import { Flex } from "@mantine/core"
import { ListJobs } from "../components/ListJobs/ListJons"
import { useAppSelector } from "../hooks/useAppSelector"
import { Pagination } from "../components/Pagination/Pagination"
import { useActions } from "../hooks/useActions"
import { calcPagination } from "../utils/calcPagination"
import { useEffect } from "react"

export const Favorites = () => {
  const { favorites, favoritePage } = useAppSelector((state) => state.jobs) 
  const { setFavoritePage } = useActions()
  
  useEffect(() => {
    console.log(Math.round(favorites.length / 4))
    if (favorites.length === favoritePage * 4 - 4) {
      setFavoritePage(favoritePage - 1)
    }
  }, [favoritePage, favorites, setFavoritePage])

  const change = (page: number) => {
    console.log(favorites.length / 4)
    calcPagination(favoritePage)
    setFavoritePage(page)
  }

  return (
    <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773, margin: '0 auto' }} direction={'column'}>
      <>
        <ListJobs vacations={favorites.slice(...calcPagination(favoritePage))} />
        <Pagination totalCount={Math.ceil(favorites.length / 4)} page={favoritePage || 1} change={change} />
      </>
    </Flex>
  )
}
