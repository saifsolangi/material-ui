import React from 'react'
import TourCard from './components/TourCard'
import { Container, Grid, Typography } from '@mui/material'
import SearchAppBar from './components/AppBar'
import cities from './data.json'

const App = () => {
  return (
    <div>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Container sx={{ marginY: 5 }}>
          {cities.map((city) =>
            <>


              <Typography
                variant='h4'
                component='h2'
                marginTop={5}
                marginBottom={3}>
                Top {city.name} Tours
              </Typography>
              <Grid container spacing={2}>
                {city.tours.map((tour, index) =>
                  <TourCard tour={tour} key={index} />
                )}
              </Grid>


            </>
          )}

        </Container>

      </Container>
    </div>
  )
}

export default App