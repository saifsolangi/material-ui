import { AccessTime } from '@mui/icons-material'
import '../app.css'
import { Box, Grid, Paper, Rating, Typography, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'


const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

const TourCard = ({ tour }) => {
    return (

        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={tour.image} className='img' />

                    <Box paddingX={1}>
                        <Typography variant='subtitle1'>
                            {tour.name}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                            marginTop={2}>
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography marginLeft={0.5}>{tour.duration} Hours</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={tour.rating} precision={.5} size='small' readOnly />
                            <Typography marginLeft={0.5}>{tour.rating}</Typography>
                            <Typography variant='subtitle2' marginLeft={0.5}>({tour.numberOfReviews} reviews)</Typography>
                        </Box>
                        <Typography variant='h6' component='h3' marginTop={0}>
                            From C ${tour.price}
                        </Typography>
                    </Box>

                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard