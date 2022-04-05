import {
  Box,
  Skeleton,
  Typography,
  CircularProgress,
  Link,
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import fetcher from '../helpers/fetcher'
import { Carousel } from 'react-responsive-carousel'
import { Img } from 'react-image'
import styled from '@emotion/styled'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const URL = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id'

const config = {
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
  },
}

const ImgGame = styled(Img)({
  borderRadius: '6px',
})

const TypographyDescription = styled(Typography)({
  padding: '30px 0 30px 0',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
})

const TypographyTitle = styled(Typography)({
  textAlign: 'center',
})

const TypographyGeneric = styled(Typography)({
  padding: '10px 0 10px 0',
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
})

const LinkGame = styled(Link)({
  padding: '10px 0 10px 0',
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const CarouselGame = styled(Carousel)({
  width: '50%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '4px',
})

export default function Game() {
  const search = useLocation().search
  const idGame = new URLSearchParams(search).get('id')
  const { data: game, isValidating: loading } = useSWR(
    [`${URL}=${idGame}`, config],
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    },
  )

  return loading || game === null ? (
    <Skeleton variant="text" animation="wave" />
  ) : (
    <Box>
      <TypographyTitle variant="h1">{game.title}</TypographyTitle>
      <CarouselGame autoPlay infiniteLoop showThumbs={false}>
        {game.screenshots.map((screenshot: any) => (
          <ImgGame
            key={game.id}
            src={screenshot.image}
            loader={<CircularProgress />}
          />
        ))}
      </CarouselGame>
      <TypographyDescription>{game.description}</TypographyDescription>
      <TypographyGeneric variant="h3">URL</TypographyGeneric>
      <LinkGame
        underline="none"
        target="_blank"
        rel="noopener"
        href={game.game_url}
      >
        {game.game_url}
      </LinkGame>
      <TypographyGeneric variant="h3">Genre</TypographyGeneric>
      <TypographyGeneric variant="overline">{game.genre}</TypographyGeneric>
      <TypographyGeneric variant="h3">Platform</TypographyGeneric>
      <TypographyGeneric variant="overline">{game.platform}</TypographyGeneric>
      <TypographyGeneric variant="h3">Publisher</TypographyGeneric>
      <TypographyGeneric variant="overline">{game.publisher}</TypographyGeneric>
      <TypographyGeneric variant="h3">Developer</TypographyGeneric>
      <TypographyGeneric variant="overline">{game.developer}</TypographyGeneric>
    </Box>
  )
}
