import { Header, Group, Box, Flex } from '@mantine/core'
import { Logo } from './Logo'
import { Link, useLocation } from 'react-router-dom'
import { useStylesHeader } from './header.style';

export const HeaderWrapper = () => {
  const { classes, cx } = useStylesHeader();
  const { pathname } = useLocation()
  
  return (
    <Header
      height={84}
      className={classes.header}
    >  
        <Flex 
          className={classes.wrapper}
          
        >
          <Box className={classes.logoText}>
            <Logo />
          </Box>
          <Group className={classes.groupLink}>
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
        </Flex>
      
    </Header>
  )
}
