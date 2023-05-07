import { createStyles } from '@mantine/core'

export const useCardStyle = createStyles(() => ({
  wrapper: {
    background: '#FFFFFF',
    border: '1px solid #EAEBED',
    borderRadius: 12,
    minHeight: 137,
  },

  wrapperVacation: {
    background: '#FFFFFF',
    border: '1px solid #EAEBED',
    borderRadius: 12,
    minHeight: 157,
  },

  boxWrap: {
    gap: 12, 
    marginTop: 8,
    display: 'flex',
    color: '#7B7C88'
  },

  boxWrapVacation: {
    gap: 13, 
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    color: '#7B7C88'
  },

  star: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
    top: 20,
    cursor: 'pointer',
    stroke: '#5E96FC',
  },

  title: {
    textDecoration: 'none',
    maxWidth: 'calc(100% - 40px)',
    fontWeight: 600,
    fontSize: 20,
    color: '#5E96FC',
    fontFamily: 'Inter'
  },

  titleVacation: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 28,
    color: '#232134'
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
    color: '#232134'
  },

  priceVacation: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 20,
    color: '#232134'
  },

  typeWork: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
    color: '#232134',
  },

  typeWorkVacation: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 20,
    color: '#232134',
  }
}))