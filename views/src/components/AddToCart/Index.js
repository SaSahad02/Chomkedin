import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Table, TableCell, TableRow, TableBody ,Typography, Grid, Divider, Box, Paper } from '@material-ui/core'
import { useCart } from 'react-use-cart'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
      container: {
        overflow: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '50px',
        padding: '10px',
        margin: '10px',
      },
      finalSection : {
        margin: '1',
        padding : '1',
       justifyContent: "space-around",
       alignItems: "center",
       flexDirection: "row-reverse",
       display: "flex"
      }, 
      finalText : {
        variant: 'h6',
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
      },
      image: {
        width: '70px',
        [theme.breakpoints.up('md')]: {
          width: '150px'
        },
      },
      insideText : {
        variant: 'h6',
        [theme.breakpoints.up('md')]: {
          variant: 'h5',
        },
      },
      buttonSize : {
        // size: 'small',
        // [theme.breakpoints.up('md')]: {
        //   size: 'large',
        // },
      },

}));





const Index = () => {

    const classes = useStyles(); 

    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();

     // console.log(items);
    
    if(isEmpty) return <Typography align="center" variant="h4" color="secondary" style={{marginTop: '40px', marginBottom: '80px'}}>Your Cart is Empty</Typography>  
      
    return (
        <Grid>
            <Typography variant="h3" align="center" color="secondary" >Cart Section</Typography>
            <Divider variant="inset" />
            <br />
            <Typography variant="h4" align="right" >Cart {totalUniqueItems} - Total Cart {totalItems}</Typography>
            <Divider />
            <Paper container elevation={7} className={classes.container} >
    <Table spacing={3}  size="small" aria-label="a dense table">
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
               <img className={classes.image} src={item.img} alt={item.title} />
              </TableCell>
              <TableCell align="center"><Typography className={classes.insideText} >{item.title}</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.insideText} >৳ {item.price}</Typography></TableCell>
              <TableCell align="center">
                  <Button color="primary" className={classes.buttonSize} variant="outlined"
                  onClick={()=> updateItemQuantity(item.id, item.quantity-1)}
                  >
                    <Typography > - </Typography>
                  </Button>
              </TableCell>
              <TableCell align="center"><Typography className={classes.insideText} >Qunatity({item.quantity})</Typography></TableCell>
              <TableCell align="center">
                  <Button color="primary" className={classes.buttonSize} variant="outlined"
                  onClick={()=> updateItemQuantity(item.id, item.quantity+1)}
                  >
                    <Typography > + </Typography>
                  </Button>
              </TableCell>
              <TableCell align="center">
                  <Button color="secondary" className={classes.buttonSize} variant="outlined"
                  onClick={()=> removeItem(item.id)}
                  >
                      Remove Item
                  </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
</Paper>

      <Box
          className={classes.finalSection}
        >

         <Box p={1} >
            <Button 
            variant="contained"
            color="primary"
            component={Link}
            to="/address"
            >
            <Typography className={classes.finalText} >Purchase Now</Typography>
            </Button>
        </Box>

        <Box p={1} >
            <Button 
            variant="outlined"
            onClick={()=> emptyCart()}
            color="secondary"
            >
            <Typography className={classes.finalText} >Clear Cart</Typography>
            </Button>
        </Box>

        <Box p={1} >

     <Typography className={classes.finalText} > Total Price: ৳ {cartTotal}</Typography>

        </Box>

        </Box>

        </Grid>
    )
}

export default Index
