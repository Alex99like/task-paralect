import { createStyles } from '@mantine/core'

export const useSearchStyle = createStyles((theme) => ({
  root: {
    minWidth: 320, 
    width: "100%", 
    maxWidth: 773
  },
  wrapper: {
    minWidth: 320, 
    width: "100%", 
    maxWidth: 773,
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 8,
    height: 48,
    fontSize: 14,
    
    '::placeholder': {
      padding: 0,
      color: theme.colors.placeholderColor,
      fontFamily: 'Inter'
    }
  },

  icon: {
    paddingLeft: 6
  },

  button: {
    width: 83,
    marginRight: 3,
    //padding: '10px 20px',
    height: 32,
    background: theme.colors.bluePrimary,
    borderRadius: 8,
    fontWeight: 400,

    ':hover': {
      background: theme.colors.blueHover
    },

    ':active': {
      background: theme.colors.blueActive
    }
  }
}))