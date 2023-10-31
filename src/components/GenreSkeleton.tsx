import { HStack, List, ListItem, Skeleton, SkeletonText, VStack } from '@chakra-ui/react'

interface Props {
  skeletonItem?: number
}

const GenreSkeleton = ({ skeletonItem = 10 }: Props) => {
  return (
    <List>
      {[...Array(skeletonItem).keys()].map(skeleton => (
        <ListItem key={skeleton} paddingY='5px'>
          <HStack>
            <Skeleton width='32px' height='32px' />
            <VStack>
              <Skeleton width='100px' height='10px' />
              <Skeleton width='100px' height='10px' />
            </VStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreSkeleton
