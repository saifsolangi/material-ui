import React from 'react'
import TourCard from './components/TourCard'
import { Container, Grid } from '@mui/material'

const App = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App