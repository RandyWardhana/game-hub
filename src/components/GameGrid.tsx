import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import { Fragment } from 'react';

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useGames(gameQuery)

  if (error) <Text>{error.message}</Text>

  return (
    <Box padding="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading && [...Array(10).keys()].map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page?.results?.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={5}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Box>
  )
}

export default GameGrid
