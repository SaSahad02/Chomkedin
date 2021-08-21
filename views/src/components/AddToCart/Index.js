import React from 'react'
import { Button, Table, TableCell, TableRow, TableBody ,Typography, Grid, Divider, Box } from '@material-ui/core'
import { useCart } from 'react-use-cart'

const Index = () => {
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
    
    if(isEmpty) return <Typography align="center" variant="h4" color="secondary">Your Cart is Empty</Typography>  
      
    return (
        <Grid>
            <Typography variant="h3" align="center" color="secondary" >Cart Section</Typography>
            <Divider variant="inset" />
            <br />
            <Typography variant="h5" >Cart {totalUniqueItems} Total Cart {totalItems}</Typography>
    <Table spacing={3} elevation={7} size="small" aria-label="a dense table">
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
               <img height="150px" width="150px" src={item.img} alt={item.title} />
              </TableCell>
              <TableCell align="center"><Typography variant="h5" >{item.title}</Typography></TableCell>
              <TableCell align="center"><Typography variant="h5" >৳ {item.price}</Typography></TableCell>
              <TableCell align="center">
                  <Button color="primary" size="large" variant="outlined"
                  onClick={()=> updateItemQuantity(item.id, item.quantity-1)}
                  >
                    <Typography > - </Typography>
                  </Button>
              </TableCell>
              <TableCell align="center"><Typography variant="h5" >Qunatity({item.quantity})</Typography></TableCell>
              <TableCell align="center">
                  <Button color="primary" size="large" variant="outlined"
                  onClick={()=> updateItemQuantity(item.id, item.quantity+1)}
                  >
                    <Typography > + </Typography>
                  </Button>
              </TableCell>
              <TableCell align="center">
                  <Button color="secondary" size="large" variant="outlined"
                  onClick={()=> removeItem(item.id)}
                  >
                      Remove Item
                  </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>


      <Box
             m={1} p={1}
             justifyContent="space-around"
            alignItems="center"
            flexDirection="row-reverse"
            display="flex"
        >

         <Box p={1} >
            <Button 
            variant="contained"
            color="primary"
            >
            <Typography variant="h4" >Pay Now</Typography>
            </Button>
        </Box>

        <Box p={1} >
            <Button 
            variant="outlined"
            onClick={()=> emptyCart()}
            color="secondary"
            >
            <Typography variant="h4" >Clear Cart</Typography>
            </Button>
        </Box>

        <Box p={1} >
     <Typography variant="h4" > Total Price: ৳ {cartTotal}</Typography>

        </Box>

        </Box>

        </Grid>
    )
}

export default Index
