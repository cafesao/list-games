import { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material'
import useSWR from 'swr'
import fetcher from '../helpers/fetcher'

import CardGames from '../components/CardGames'

const URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

const config = {
  params: {
    platform: 'pc',
  },
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
  },
}

function App() {
  const { data, error } = useSWR([URL, config], fetcher)
  const [games, setGames] = useState([])

  useEffect(() => {
    if (!error && data) {
      setGames(data.splice(0, 24))
    }
  }, [data])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {games.map((game: any) => (
          <Grid key={game.id} item xs={3}>
            <CardGames game={game} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default App
