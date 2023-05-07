import { createStyles } from '@mantine/core'

export const useFormStyle = createStyles(() => ({
  main: {
    
    backgroundColor: '#F5F5F5',
    '@media (max-width: 360px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  root: { 
    padding: 0 
  },
}))