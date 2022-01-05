import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Paper, Typography } from '@material-ui/core'

const Index = () => {
    return (
<Paper elevation={4} style={{marginTop: '30px', paddingTop: '10px', paddingLeft: '10px'}}>
            <Grid container>
<Grid xs={6} lg={4}>
  <Typography variant="h5">Quick Links</Typography>
  <ul>
    <li><Button component={Link} to="/">Home Page</Button></li>
    <li><Button component={Link} to="/cart">Cart Page</Button></li>
  </ul>
</Grid>
<Grid xs={6} lg={4}>
  <Typography variant="h5" >Admin Links</Typography>
  <ul>
    <li><Button component={Link} to="/auth">Admin Log In</Button></li>
    <li><Button component={Link} to="/admin-panel">Admin Panel</Button></li>
  </ul>
</Grid>


<Grid xs={12} lg={4} >

                   <Typography align="center" color="secondary">Copyright © 2022 ChomkeDin</Typography>
                   <Typography align="center">Surprise Executor by Sahad</Typography>
</Grid>
    </Grid>
</Paper>
    )
}

export default Index
