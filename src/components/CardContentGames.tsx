import styled from '@emotion/styled'
import { CardContent, Typography } from '@mui/material'
import CardContentImage from './CardContentImage'

const TypographyDescription = styled(Typography)({
  paddingTop: '40px',
})

const TypographyGeneric = styled(Typography)({
  textAlign: 'center',
})

export default function CardContentGames({
  title,
  genre,
  thumbnail,
  short_description,
}: any) {
  return (
    <CardContent>
      <TypographyGeneric variant="h5">{title}</TypographyGeneric>
      <TypographyGeneric sx={{ mb: 1.5 }} color="text.secondary">
        {genre}
      </TypographyGeneric>
      <CardContentImage thumbnail={thumbnail} />
      <TypographyDescription variant="body2">
        {short_description}
      </TypographyDescription>
    </CardContent>
  )
}
