import { UnstyledButton, createStyles } from "@mantine/core"

const SVGReset = () => (

  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="11.7425" y1="4.44219" x2="4.44197" y2="11.7427" stroke="#ACADB9" strokeWidth="1.25"/>
    <line x1="11.9013" y1="11.7425" x2="4.60082" y2="4.44197" stroke="#ACADB9" strokeWidth="1.25"/>
  </svg>
)

const useButtonStyle = createStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    marginTop: 1,
    color: '#ACADB9',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 14,

    ':hover': {
      color: '#5E96FC',
      'line': {
        stroke: '#5E96FC',
      }
    },

    ':active': {
      color: '#92C1FF',
      'line': {
        stroke: '#92C1FF',
      }
    }
  },
}))

export const ButtonReset = ({ reset }: { reset: () => void  }) => {
  const { classes } = useButtonStyle()
  
  return (
    <UnstyledButton 
      onClick={() => reset()}
      className={classes.wrapper}
    >
      Сбросить все
      <SVGReset />
    </UnstyledButton>
  )
}
