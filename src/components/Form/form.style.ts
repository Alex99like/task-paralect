import { createStyles, CSSObject } from '@mantine/core'

export const useFormStyle = createStyles((theme) => ({
  text: {
    fontWeight: 700,
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 1,
    letterSpacing: 0,
    background: theme.colors.white,
    color: theme.colors.blackPrimary,
  },

  img: {
    position: 'relative',
    top: 1,
    left: 1
  },

  mtOne: {
    marginTop: 20
  },

  mtTwo: {
    marginTop: 6
  },

  label: {
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 0,
    marginBottom: 17
  },

  labelIndustry: {
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 0,
    marginBottom: 19
  },

  wrapper: {
    backgroundColor: theme.colors.white,
    padding: 20,
    paddingLeft: 19,
    paddingBottom: 18,
    width: 315,
    minWidth: 315,
    height: 360,
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',

    '@media (max-width: 720px)': {
      width: '100%',
      marginBottom: 20,
    },
  },

  button: {
    backgroundColor: theme.colors.bluePrimary,
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 14,
    height: 40,
    alignSelf: 'end',
    letterSpacing: 0.1,
    fontFamily: 'Inter',

    ':hover': {
      background: theme.colors.blueHover
    },

    ':active': {
      background: theme.colors.blueActive
    }
  },

  inputWrapper: {
    height: 42,
    background: theme.colors.white,
    border: `1px solid ${theme.colors.borderGray}`,
    borderRadius: 8,
    padding: 11,
    paddingBottom: 13,
    '::placeholder': {
      color: theme.colors.placeholderColor,
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: 14,
    }
  },

  inputCss: {
    right: 9, 
    top: 0,
  }
}))

export const controlCss: Record<string, CSSObject> = {
  input: {
    height: 42,
    background: '#FFFFFF',
    border: '1px solid #D5D6DC',
    borderRadius: 8, 
    padding: 11,
    paddingBottom: 14,
    
    '::placeholder': {
      fontFamily: 'Inter',
      fontWeight: 400,
      left: 1,
      fontSize: 14,
      color: '#ACADB9',
    }
  },
  control: {
    cursor: 'pointer'
  },
  controlUp: {
    border: 'none',
    width: 40,
    
    alignSelf: 'center',
    color: 'rgba(172, 173, 185, 1)',
    paddingTop: 7,
    overflow: 'hidden',
    borderTopRightRadius: 13,
  },
  controlDown: {
    border: 'none',
    width: 40,
    alignSelf: 'center',
    'path': {
      strokeWidth: 4,
    },
    color: 'rgba(172, 173, 185, 1)',
    paddingBottom: 10,
    borderBottomRightRadius: 20,
  }
}
