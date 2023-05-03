import { createStyles } from '@mantine/core'

export const useStylesHeader = createStyles((theme) => ({
  wrapper: {
    maxWidth: 1440,
    display: 'flex',
    margin: '0 auto'
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
  
  logoText: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 24,

    letterSpacing: '-0.02em',
  }
}))