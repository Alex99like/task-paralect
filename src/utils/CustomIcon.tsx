import IconArrow from '../assets/down.svg'
import IconLogo from '../assets/logo.svg'
import IconReset from '../assets/reset.svg'
import IconSearch from '../assets/search.svg'
import IconLocation from '../assets/location.svg'
import IconStar from '../assets/star.svg'

import { Image, ImageProps } from '@mantine/core'

const arrIcons = {
  arrow: IconArrow,
  logo: IconLogo,
  reset: IconReset,
  search: IconSearch,
  location: IconLocation,
  star: IconStar
}

type NameIcon = keyof typeof arrIcons

export const CustomIcon = ({ name, ...prop }: { name: NameIcon } & ImageProps) => {
  return (
    <Image src={arrIcons[name]} fit='contain' { ...prop} />
  )
}
