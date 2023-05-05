import { createStyles } from '@mantine/core'

export const usePaginationStyle = createStyles((theme) => ({
  wrapper: {

  },

  dots: {
    fontFamily: 'Inter',
    '&[data-active]': {
      background: '#5E96FC',
    },
  }
}))