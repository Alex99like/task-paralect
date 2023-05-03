import { Header, Group,Box } from '@mantine/core'
import { Logo } from './Logo'
import { Link, useLocation } from 'react-router-dom'
import { useStylesHeader } from './header.style';

export const HeaderWrapper = () => {
  const { classes, cx } = useStylesHeader();
  const { pathname } = useLocation()
  
  return (
    <Header 
      height={84}
      classNames={classes.wrapper}
    >  
        <Group 
          spacing={60}
          position='center' 
          h={'100%'}
          style={{ backgroundColor: "#fff" }}
          
        >
          <Box display={'flex'} sx={{gap: 12}} pos={'absolute'} left={'11.25%'} w={141} style={{ background: '#fff' }}>
            <Logo />
          </Box>
          <Link 
            className={cx(classes.link, { [classes.activeLink]: pathname === '/'} )}
            to={'/'}
          >Поиск Вакансий
          </Link>
          <Link 
            className={cx(classes.link, { [classes.activeLink]: pathname === '/favorites'} )} 
            to={'/favorites'}
          >Избранное
          </Link>
        </Group>
      {/* </Flex> */}
      
      {/* <Logo /> */}
      
    </Header>
  )
}
