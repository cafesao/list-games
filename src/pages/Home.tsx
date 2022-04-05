import { useEffect, useState } from 'react'
import { Grid, Box, Button } from '@mui/material'
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

function getMin(maxNumber: number) {
  let min: number

  while (true) {
    const random = Math.floor(Math.random() * maxNumber)
    if (Math.abs(random - 300) > 24) {
      min = random
      break
    }
  }

  return min
}

function App() {
  const { data, error } = useSWR([URL, config], fetcher)
  const [games, setGames] = useState([])

  useEffect(() => {
    if (!error && data) {
      const min = getMin(data.length)
      setGames(data.slice(min, data.length))
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
