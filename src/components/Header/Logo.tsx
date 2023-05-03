import { Title } from '@mantine/core'
import ImgLogo from '../../assets/logo.svg'

export const Logo = () => {
  return (
    <>
      <img 
        style={{ background: '#fff' }}
        src={ImgLogo}
        width={30}
        height={30}
        
      />
      <Title
        fz={24}
        fw={600}
        ff={'Poppins'}
        style={{ background: '#fff'}}
        lts={-0.4}
      >Jobored</Title>
    </>
  )
}
