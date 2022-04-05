import styled from '@emotion/styled'
import { Card, CardActionArea } from '@mui/material'
import CardContentGames from './CardContentGames'
import { useNavigate } from 'react-router-dom'

const MultipleCardGames = styled(Card)({
  backgroundColor: '#ececec',
})

const styleSx = {
  minHeight: 380,
  margin: '10px',
}

export default function CardGames({ game }: any) {
  const navigate = useNavigate()

  return (
    <MultipleCardGames sx={styleSx}>
      <CardActionArea onClick={() => navigate(`/game?id=${game.id}`)}>
        <CardContentGames
          title={game.title}
          genre={game.genre}
          thumbnail={game.thumbnail}
          short_description={game.short_description}
        />
      </CardActionArea>
    </MultipleCardGames>
  )
}
