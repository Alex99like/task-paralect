import { Pagination as MPagination } from '@mantine/core'

export const Pagination = ({ totalCount }: { totalCount: number }) => {
  return (
    <MPagination
      mt={20}
      styles={{control: { alignSelf: 'end' }}}
      total={totalCount}
      position="center"
    />
  )
}
