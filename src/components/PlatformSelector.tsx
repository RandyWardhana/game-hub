import { Button, Menu, MenuButton, MenuList, MenuItem, Spinner } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
      <MenuList>
        {
          isLoading
            ? (
              <MenuItem justifyContent='center'>
                <Spinner />
              </MenuItem>
            )
            : data.map(platform => (
              <MenuItem key={platform.id}>{platform.name}</MenuItem>
            ))
        }
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector