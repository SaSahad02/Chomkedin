import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Grid, TextField, Typography, Button, Box } from '@material-ui/core'
import { useCart } from "react-use-cart";
import { makeStyles } from '@material-ui/core/styles';
import Purchase from '../../img/purchase.png'


const useStyles = makeStyles((theme) => ({ 
      imgSize : {
        
        [theme.breakpoints.down('md')]: {
          height: '180px',
        },
      },
      formControl: {
        marginBottom: '10px',
      }


}));

const Pay = () => {

    const classes = useStyles()
    const history = useHistory()
    const { updateCartMetadata, cartTotal} = useCart();

    const handleChange = (e) => {
      updateCartMetadata({ [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/order-overview')
      }

    return (
                <form onSubmit={handleSubmit} >
        <Grid style={{marginTop: '10px'}} container spacing={4} align="center" justify = "center" alignItems = "center" >
            <Grid item xs={12} sm={12} lg={6}  >
                <Typography variant="h4" color="primary">You Can Pay Through</Typography>
                <img className={classes.imgSize} src={Purchase} alt="img" />
            </Grid>
            <Grid item xs={12} sm={12} lg={4} >
            
            <Typography variant="h4" color="secondary" gutterBottom >Send Your Payment to +01700000000 </Typography>
            <Typography gutterBottom variant="h5" color="primary" > Total Amount: ৳ {cartTotal}</Typography>
            <TextField
                name="payMethod"
                label="Payment Method"
                onChange={handleChange}
                required
                fullWidth
                select
                SelectProps={{ native: true }}
                className={classes.formControl}
                variant="outlined"
                gutterBottom
              >
                        <option aria-label="None" value="" />
                        <option value='bKash'>BKash</option>
                        <option value='Nagad'>Nagad</option>
                        <option value='Rocket'>Rocket</option>
                        </TextField>
            <TextField 
                     gutterBottom
                     type="number"
                     required={true}
                     name="payNumber" 
                     variant="outlined" 
                     label="Number Used for Payment" 
                     fullWidth
                     className={classes.formControl}
                     onChange={handleChange}
                     />            
            <TextField 
                     gutterBottom
                     required={true}
                     name="transactionId" 
                     variant="outlined" 
                     label="Enter Your Transaction Id Here" 
                     fullWidth
                     className={classes.formControl}
                     onChange={handleChange}
                     />
                    
            </Grid>
            
            </Grid>
            <Box  
                  justifyContent="space-around"
                  alignItems="center"
                  flexDirection="row-reverse"
                  display="flex">

            <Button type="submit" size="large" variant="contained" color="primary" >Confirm Payment</Button>         
            <Button component={Link} to="/address" size="large" variant="contained" color="secondary" >Go Back</Button>         
            </Box>
            </form>
    )
}

export default Pay
