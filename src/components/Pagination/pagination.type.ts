import { createStyles } from '@mantine/core'

export const usePaginationStyle = createStyles((theme) => ({
  wrapper: {

  },

  dots: {
    border: `1px solid ${theme.colors.borderGray}`,
    borderRadius: 4,
    fontFamily: 'Inter',
    
    '&[data-active]': {
      background: theme.colors.bluePrimary,
    },
  }
}))