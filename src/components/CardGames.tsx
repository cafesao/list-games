import { Card } from '@mui/material'
import CardContentGames from './CardContentGames'

export default function CardGames({ game }: any) {
  return (
    <Card
      sx={{
        minHeight: 380,
        margin: '10px',
      }}
    >
      <CardContentGames
        title={game.title}
        genre={game.genre}
        thumbnail={game.thumbnail}
        short_description={game.short_description}
      />
    </Card>
  )
}
