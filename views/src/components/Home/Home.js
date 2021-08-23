import React from 'react'
import { Container, Grid, Card, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Container>
            <Grid spacing={4} align="center" >
            <img height="450" src="https://erietigertimes.com/wp-content/uploads/2020/12/gift.jpg" alt="img" />
            </Grid>
            <br />
            <Grid  container spacing={4} align="center" >

            <Grid xs={12} sm={6} lg={4} >
                <Card fullWidth >
                <img height="150" width="150" src="https://erietigertimes.com/wp-content/uploads/2020/12/gift.jpg" alt="img" />
                <br />
                <Button component={Link} to="/anniversary" color="primary" variant="outlined">View Collection</Button>
                </Card>
            </Grid>

            <Grid xs={12} sm={6} lg={4} >
            <Card fullWidth >
                <img height="150" width="150" src="https://erietigertimes.com/wp-content/uploads/2020/12/gift.jpg" alt="img" />
                <br />
                <Button component={Link} to="/birthday" color="primary" variant="outlined">View Collection</Button>
                </Card>
            </Grid>

            <Grid xs={12} sm={6} lg={4} >
            <Card fullWidth >
                <img height="150" width="150" src="https://erietigertimes.com/wp-content/uploads/2020/12/gift.jpg" alt="img" />
                <br />
                <Button component={Link} to="/custom" color="primary" variant="outlined">View Collection</Button>
                </Card>
            </Grid>

            </Grid>
        </Container>
    )
}

export default Home
