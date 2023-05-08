import { createStyles } from '@mantine/core'

export const useCardStyle = createStyles((theme) => ({
  wrapper: {
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 12,
    minHeight: 137,
  },

  wrapperVacation: {
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 12,
    minHeight: 157,
  },

  boxWrap: {
   columnGap: 13, 
    marginTop: 7,
    display: 'flex',
    color: theme.colors.grayLight,
    '@media (max-width: 520px)': {
      flexDirection: 'column'
    },
  },

  boxWrapVacation: {
    columnGap: 13, 
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    color: theme.colors.grayLight,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
  },

  star: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
    top: 20,
    cursor: 'pointer',
    stroke: theme.colors.blue,
  },

  title: {
    textDecoration: 'none',
    maxWidth: 'calc(100% - 40px)',
    fontWeight: 600,
    fontSize: 20,
    color: theme.colors.blue,
    fontFamily: 'Inter',

    '@media (max-width: 520px)': {
      fontSize: 18
    },
  },

  titleVacation: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 28,
    color: theme.colors.blackPrimary,

    '@media (max-width: 520px)': {
      fontSize: 18
    },
  },

  description: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16
  },

  price: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 16,
    color: theme.colors.blackPrimary
  },

  priceVacation: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 20,
    color: theme.colors.blackPrimary
  },

  typeWork: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
    color: theme.colors.blackPrimary,
  },

  typeWorkVacation: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 20,
    color: theme.colors.blackPrimary,
  },

  dot: {
    '@media (max-width: 520px)': {
      display: 'none'
    },
  }
}))