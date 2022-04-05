import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material'
import { Img } from 'react-image'

const ImgGame = styled(Img)({
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '4px',
  border: '1px solid #ddd',
  width: '80%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const CircularProgressGame = styled(CircularProgress)({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export default function CardContentImage({ thumbnail }: any) {
  return <ImgGame src={thumbnail} loader={<CircularProgressGame />} />
}
