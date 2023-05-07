import { Title } from '@mantine/core'
import ImgLogo from '../../assets/logo.svg'

export const Logo = () => {
  return (
    <>
      <img 
        src={ImgLogo}
        width={30}
        height={30}
      />
      <Title
        fz={24}
        fw={600}
        ff={'Poppins'}
        lts={-0.4}
      >Jobored</Title>
    </>
  )
}
