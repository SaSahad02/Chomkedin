import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Input from './Input.js';
import useStyles from './styles';
import { isAuthenticated, setAuthentication } from '../../Auth/auth.js'


const Auth = () => {
    const classes = useStyles()
    const history = useHistory()
    const isLoggedIn = isAuthenticated();
 
    if(isLoggedIn) {
        history.push('/admin-panel')
    }


    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )


    const handleSubmit = async (e) => {
      e.preventDefault()

      await axios.post('http://localhost:8000/admin/signin', {
        email, password
      }).then(function (response) {
       // console.log(response);
        setAuthentication(response.data.token);
        history.push('/admin-panel')
      })
      .catch(function (error) {
         console.warn(error);
        console.log("Internal Server Error. Please, try again later. or Check you input again!");
      });

    }



    return (
        <Container component="main" maxWidth="xs">
             <Paper className={classes.paper} elevation={3}>
                  <Avatar className={classes.avatar}>
                      <LockOutlinedIcon />
                  </Avatar>
                      <Typography variant="h5">Sign In</Typography>
                      <form className={classes.form} onSubmit={handleSubmit}>
                          <Grid container spacing={2}>
                              <Input autoFocus={true} required="true" name="email" label="Email Address" handleChange={(e)=> setEmail(e.target.value)}  type="email" />
                              <Input required="true" name="password" label="Password" 
                                     handleChange={(e)=> setPassword(e.target.value)} 
                                     type={showPassword ? "text" : "password"} 
                                     handleShowPassword={handleShowPassword}
                                     />
                          </Grid>
                          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                              Sign In
                          </Button>
                          
                          
                      </form>
             </Paper>
            
        </Container>
    )
}

export default Auth
