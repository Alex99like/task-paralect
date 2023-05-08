import { Flex } from "@mantine/core"
import { ListJobs } from "../components/ListJobs/ListJobs"
import { useAppSelector } from "../hooks/useAppSelector"
import { Pagination } from "../components/Pagination/Pagination"
import { useActions } from "../hooks/useActions"
import { calcPagination } from "../utils/calcPagination"
import { useEffect } from "react"
import { NoData } from "../components/NoData/NoData"
import { countItemOnPage } from "../api/consts"
import { useStyleFavorites } from "./pages.style"

export const Favorites = () => {
  const { favorites, favoritePage } = useAppSelector((state) => state.jobs) 
  const { classes } = useStyleFavorites()
  const { setFavoritePage } = useActions()
  
  useEffect(() => {
    if (favorites.length === favoritePage * countItemOnPage - countItemOnPage) {
      setFavoritePage(favoritePage - 1)
    }
  }, [favoritePage, favorites, setFavoritePage])

  const change = (page: number) => {
    calcPagination(favoritePage)
    setFavoritePage(page)
  }

  return (
    <Flex 
      className={classes.wrapper}
      direction={'column'}
    >
      {favorites.length ? (
        <>
          <ListJobs vacations={favorites.slice(...calcPagination(favoritePage))} />
          <Pagination totalCount={Math.ceil(favorites.length / countItemOnPage)} page={favoritePage || 1} change={change} />
        </>
      ) : (
        <NoData />
      )}
    </Flex>
  )
}
