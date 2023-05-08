import { createStyles } from '@mantine/core'

export const useStyleJobs = createStyles(() => ({
  wrapper: {
    margin: '24px auto',
    columnGap: 28,
    justifyContent: 'center',
    
    '@media (max-width: 720px)': {
      flexDirection: 'column',
    },
  },

  wrapperList: {
    minWidth: 320, 
    width: "100%", 
    maxWidth: 773,
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))

export const useStyleFavorites = createStyles(() => ({
  wrapper: {
    minWidth: 320, 
    width: "100%", 
    maxWidth: 773, 
    margin: '7px auto 0'
  }
}))