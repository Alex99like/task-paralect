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
      sx={{
        '@media (max-width: 560px)': {
          height: 120
        }
      }}
      className={classes.header}
    >  
        <Flex 
          // direction={'column'}
          className={classes.wrapper}
          h={'100%'}
        >
          <Box className={classes.logoText} display={'flex'} sx={{gap: 12}}  w={141}>
            <Logo />
          </Box>
          <Group className={classes.groupLink} display={'flex'} spacing={60}>
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
