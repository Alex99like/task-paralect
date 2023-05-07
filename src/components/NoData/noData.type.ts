import { createStyles } from '@mantine/core'

export const useNoDataStyle = createStyles(() => ({
  wrapper: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 24,
    alignItems: 'center',
    color: '#343A40',
    marginTop: 28
  },

  link: {
    marginTop: 28,
    background: '#DEECFF',
    borderRadius: 8,
    color: '#3B7CD3',
    padding: '10px 24px',
    fontWeight: 500,
    letterSpacing: 0.2,
    fontSize: 14,
    textDecoration: 'none'
  },

  imageWrapper: {
    width: 240,
    margin: '0 auto'
  }

}))