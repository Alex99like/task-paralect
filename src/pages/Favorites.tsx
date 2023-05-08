import { Flex } from "@mantine/core"
import { ListJobs } from "../components/ListJobs/ListJobs"
import { useAppSelector } from "../hooks/useAppSelector"
import { Pagination } from "../components/Pagination/Pagination"
import { useActions } from "../hooks/useActions"
import { calcPagination } from "../utils/calcPagination"
import { useEffect } from "react"
import { NoData } from "../components/NoData/NoData"

export const Favorites = () => {
  const { favorites, favoritePage } = useAppSelector((state) => state.jobs) 
  const { setFavoritePage } = useActions()
  
  useEffect(() => {
    if (favorites.length === favoritePage * 4 - 4) {
      setFavoritePage(favoritePage - 1)
    }
  }, [favoritePage, favorites, setFavoritePage])

  const change = (page: number) => {
    calcPagination(favoritePage)
    setFavoritePage(page)
  }

  return (
    <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773, margin: '7px auto 0' }} direction={'column'}>
      {favorites.length ? (
        <>
          <ListJobs vacations={favorites.slice(...calcPagination(favoritePage))} />
          <Pagination totalCount={Math.ceil(favorites.length / 4)} page={favoritePage || 1} change={change} />
        </>
      ) : (
        <NoData />
      )}
    </Flex>
  )
}
