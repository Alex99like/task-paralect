import { createStyles } from '@mantine/core'

export const useStylesHeader = createStyles((theme) => ({
  header: {
  
  },

  wrapper: {
    maxWidth: 1440,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px auto',
    
    '@media (max-width: 800px)': {
      justifyContent: 'space-between',
      padding: '0 40px'
    },

    '@media (max-width: 560px)': {
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 0
    },
  },
  
  link: {
    color: theme.colors.blackPrimary,
    textDecoration: 'none',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 0.20,
  },
  activeLink: {
    color: theme.colors.bluePrimary,
    fontWeight: 500,
  },

  groupLink: {
    height: 20,
    '@media (max-width: 560px)': {
      marginTop: 15
    },
  },
  
  logoText: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 24,
    position: 'absolute',
    left: '11.5%',
    letterSpacing: '-0.02em',

    '@media (max-width: 800px)': {
      left: '0',
      position: 'relative',
    },
  }
}))