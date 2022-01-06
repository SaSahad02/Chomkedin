import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


import logo from '../../img/logo.png'
import { isAuthenticated, logout } from '../../Auth/auth.js'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
      width: '200px',
      display: 'flex',
    },
  },
  profile: {
    display: 'flex',
    // justifyContent: 'space-between',
    // width: '400px',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
  },
}));

export default function Navbar () {

    const history = useHistory()
    const location = useLocation()
    const isLoggedIn = isAuthenticated()


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const singout = () => {
    logout();
    history.push('/')
  }

  React.useEffect(() => {

       if(isLoggedIn) {
         const decodedToken = decode(isLoggedIn)
         
         if (decodedToken.exp * 1000 < new Date().getTime()) {
           logout()
          //  dispatch({ type: 'LOGOUTALRET'})
           history.push('/')
         }
       }
       
      // setUser(JSON.parse(localStorage.getItem('profile')))
   }, [location])

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          <Link to="/">
                <img className={classes.image} src={logo} alt="logo" height="70" />
           </Link>
          </IconButton>
          <div className={classes.grow} />
            <div className={classes.profile}>
              <div className={classes.sectionDesktop}>
              { isLoggedIn ? (<Button onClick={singout} ><Typography color="secondary" variant="h6">Logout</Typography></Button>) : (
                <> <Button component={Link} to="/" ><Typography variant="h6">Home</Typography></Button>
                 <MenuItem onClick={handleMenuClose} component={Link} to="/cart" >
                  <IconButton aria-label="cart" color="inherit">
                      <ShoppingCartOutlinedIcon />
                  </IconButton>
                  <Typography variant="h6" >Cart</Typography>
                </MenuItem> </>
              ) }      

          </div>
                         
                       </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}