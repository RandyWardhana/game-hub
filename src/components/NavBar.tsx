import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Link to='/'>
        <Image src={logo} boxSize='60px' />
      </Link>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar