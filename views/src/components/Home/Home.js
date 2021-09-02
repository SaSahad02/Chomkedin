import React from 'react'
import { Container, Grid, Card, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import a from '../../img/a.png'
import b from '../../img/b.png'
import c from '../../img/c.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
      banner : {
      width : '320px',
        [theme.breakpoints.up('md')]: {
          width : '100%',
        },
      }
}));

const Home = () => {

    const classes = useStyles()

    return (
        <Container>
            <Grid spacing={4} align="center" >
  <img className={classes.banner} src="https://image.shutterstock.com/image-vector/surprise-sign-colour-confetti-vector-260nw-313945592.jpg" alt="img" />
            </Grid>
            <br />
            <Typography style={{marginBottom: '20px'}} align="center" variant="h3" color="secondary" gutterBottom >Our Services</Typography>
            <Grid  container spacing={4} justify="space-between" align="center" >
            <Grid xs={12} lg={4} >
                <Card fullWidth >
                <Link to="/anniversary">
                <img width="300" src={a} alt="img" />
                </Link>
                <br />
                <Button component={Link} to="/anniversary" size="large" color="primary" variant="outlined">Shop Now</Button>
                </Card>
            </Grid>

            <Grid xs={12} lg={4} >
            <Card fullWidth >
            <Link to="/birthday">
                <img width="300" src={b} alt="img" />
                </Link>
                <br />
                <Button component={Link} to="/birthday" size="large" color="primary" variant="outlined">Shop Now</Button>
                </Card>
            </Grid>

            <Grid xs={12} lg={4} >
            <Card fullWidth >
            <Link to="/custom">
                <img width="300" src={c} alt="img" />
                </Link>
                <br />
                <Button component={Link} to="/custom" size="large" color="primary" variant="outlined">Shop Now</Button>
                </Card>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Home
