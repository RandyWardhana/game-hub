import { Button, Menu, MenuButton, MenuList, MenuItem, Spinner } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms()
  const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {
          isLoading
            ? (
              <MenuItem justifyContent='center'>
                <Spinner />
              </MenuItem>
            )
            : data?.results?.map(platform => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            ))
        }
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector