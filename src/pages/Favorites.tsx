import { Flex } from "@mantine/core"
import { ListJobs } from "../components/ListJobs/ListJons"
import { useAppSelector } from "../hooks/useAppSelector"

export const Favorites = () => {
  const { favorites } = useAppSelector(state => state.jobs) 

  return (
    <Flex style={{ minWidth: 320, width: "100%", maxWidth: 773, margin: '0 auto' }} direction={'column'}>
      <>
        <ListJobs vacations={favorites} />
        {/* <Pagination totalCount={favorites.length} page={countPage} change={change} /> */}
      </>
    </Flex>
  )
}
