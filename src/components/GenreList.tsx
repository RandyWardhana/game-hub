import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"

import GenreSkeleton from "./GenreSkeleton"

import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
  const { data, error, isLoading } = useGenres()


  if (error) return null
  if (isLoading) return <GenreSkeleton />

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
