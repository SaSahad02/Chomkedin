import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, TextField, Typography, Divider, Button, Checkbox, FormControlLabel, Box } from '@material-ui/core'
import { useCart } from "react-use-cart";



const Info = () => {
    const [checked, setChecked] = React.useState(false);
    const { updateCartMetadata } = useCart();
    const history = useHistory()

    const handleChange = (e) => {
        updateCartMetadata({ [e.target.name]: e.target.value });
      }
    const handleSubmit = (e) => {
      e.preventDefault();
      history.push('/payment')
    }

    const handleChecked = (event) => {
      setChecked(event.target.checked);
     // console.log(checked);
    };

    return (
        <>
        <Typography variant="h4" color="secondary" gutterBottom align="center">
        <Box sx={{ fontWeight: 'bold', m: 1 }}>Checkout</Box>
        </Typography>
        <Divider />
        <form onSubmit={handleSubmit}>
        <Grid style={{marginTop: '10px'}} container justify="space-between" spacing={4} align="center" >
            <Grid item xs={12} sm={12} lg={5}  >
            <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="fullName2"
            name="shipName"
            label="Full name"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="number2"
            name="shipNumber"
            label="Phone Number"
            placeholder="Must Be An Active Phone Number"
            type="number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address2"
            name="shipAddress"
            label="Street Address"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city2"
            name="shipCity"
            label="City"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state2" name="shipState" label="Division - Postal Code" fullWidth  onChange={handleChange} />
        </Grid>
        <Grid item >
        <FormControlLabel
            control={<Checkbox color="secondary" checked={checked} name="saveAddress" value="yes" />}
            label="Use this address for billing"
            onChange={handleChecked}
          />
        </Grid>
      </Grid>
    </React.Fragment> 
            </Grid>
            <Grid item xs={12} sm={12} lg={5} >
            <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Billing address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
           disabled={checked=== true ? true : false}
            required
            id="fullName1"
            name="billName"
            label="Full name"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled={checked=== true ? true : false}
            required
            id="number1"
            name="billNumber"
            label="Phone Number"
            placeholder="Must Be An Active Phone Number"
            type="number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled={checked=== true ? true : false}
            required
            id="address1"
            name="billAddress"
            label="Street Address"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={checked=== true ? true : false}
            required
            id="city1"
            name="billCity"
            label="City"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled={checked=== true ? true : false} id="state1" name="billState" label="Division - Postal Code" fullWidth  onChange={handleChange} />
        </Grid>
      </Grid>

    </React.Fragment>     

            </Grid>

            </Grid>
            <br />
            <div align="center">
            <TextField
            id="info"
            name="info"
            label= "Instruction for Cake, Card or Anything"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            id="gift"
            name="gift"
            label= "Anything specific to put in Gift Box (within 500 Bdt)?"
            fullWidth
            onChange={handleChange}
          />
            <Button style={{marginTop: '20px'}}  type="submit" size="large" variant="contained" color="primary" >Confirm Address</Button>
            </div>
            </form>
            </>
    )
}

export default Info
