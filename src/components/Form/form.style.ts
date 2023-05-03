import { createStyles } from '@mantine/core'

export const useFormStyle = createStyles((theme) => ({
  text: {
    fontWeight: 700,
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 1,
    letterSpacing: 0,
    background: '#fff',
    color: theme.colors.blackPrimary,
  },

  img: {
    position: 'relative',
    top: 1,
    left: 1
  },

  mtOne: {
    marginTop: 18
  },

  mtTwo: {
    marginTop: 4
  },

  label: {
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 0,
    marginBottom: 18
  },

  reset: {
    color: '#ACADB9',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.5,
    display: 'flex',
    gap: 3
  },

  wrapper: {
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 19,
    paddingBottom: 18,
    width: 315,
    height: 360,
    border: '1px solid #EAEBED',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
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
  }
}))