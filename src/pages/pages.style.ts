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
    margin: '8px auto 0'
  }
}))

export const useStyleNotFound = createStyles((theme) => ({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: 80,
    color: theme.colors.bluePrimary
  },

  text: {
    fontSize: 25,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: theme.colors.blackPrimary
  }
}))

export const useStyleVacation = createStyles(() => ({
  wrapper: {
    minWidth: 320, 
    width: "100%", 
    maxWidth: 773, 
    margin: '24px auto', 
    flexDirection: 'column'
  }
}))