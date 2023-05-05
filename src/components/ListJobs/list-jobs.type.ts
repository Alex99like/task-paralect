import { createStyles } from '@mantine/core'

export const useCardStyle = createStyles((theme) => ({
  wrapper: {
    background: '#FFFFFF',
    border: '1px solid #EAEBED',
    borderRadius: 12,
    height: 137,
  },

  title: {
    fontWeight: 600,
    fontSize: 20,
    color: '#5E96FC',
    fontFamily: 'Inter'
  },

  price: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 16,
    color: '#232134'
  },

  typeWork: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
    color: '#232134',
  }
}))