import { Pagination as MPagination } from '@mantine/core'
import { usePaginationStyle } from './pagination.type'


export const Pagination = ({ totalCount, change, page }: { totalCount: number, page: number, change: (page: number) => void }) => {
  const { classes } = usePaginationStyle()

  return (
    <MPagination
      classNames={{
        control: classes.dots
      }}
      mt={40}
      styles={{control: { alignSelf: 'end' }}}
      total={totalCount}
      position="center"
      value={page}
      onChange={(e) => change(e)}
    />
  )
}
