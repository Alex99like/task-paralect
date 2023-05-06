import { createStyles } from "@mantine/core"

const useArrowStyle = createStyles((theme, { active }: { active: boolean }) => ({
  wrapper: {
    position: 'absolute',
    height: '90%',
    background: '#fff',
    width: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  icon: {
    transition: 'transform 150ms',
    transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
    
    'path': {
      stroke: active ? theme.colors.bluePrimary : '#ACADB9',  
    }
  }
}))

export const ArrowIcon = ({ active = true }: { active: boolean }) => {
  const { classes } = useArrowStyle({ active })

  return (
    <div className={classes.wrapper}>
      <svg className={classes.icon} width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1" stroke="#ACADB9" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  )
}