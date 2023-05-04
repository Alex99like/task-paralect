import { createStyles } from '@mantine/core'

export const useSearchStyle = createStyles((theme) => ({
  wrapper: {
    width: 773,
    border: '1px solid #EAEBED',
    borderRadius: 8,
    height: 48,
    fontSize: 14,
    
    '::placeholder': {
      padding: 0,
      fontFamily: 'Inter'
    }
  },

  icon: {
    paddingLeft: 6
  },

  button: {
    width: 83,
    height: 32,
    background: '#5E96FC',
    borderRadius: 8,
    fontWeight: 400,
  }
}))