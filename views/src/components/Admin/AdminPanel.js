import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { Button, Divider, Typography, Grid, Paper, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 900,
    },
    title: {
      marginTop: theme.spacing(2),
    },
    finalSection : {
        margin: '1',
        padding : '1',
       justifyContent: "space-around",
       alignItems: "center",
       flexDirection: "row-reverse",
       display: "flex"
      },
    paper: {
        marginBottom: '10px'
    }
  }));


const AdminPanel = () => {

    const [order, setOrder] = useState([])
    const [totalOrder, setTotalOrder] = useState()
    const [id, setId] = useState()
    const classes = useStyles()

    useEffect(() => {
        axios.post('http://localhost:8000/admin/orderview')
          .then(function (response) {
            setOrder(response.data.data.orderList);
            setTotalOrder(response.data.data.total);
            console.log(response.data.data.orderList);
          })
          .catch(function (error) {
            console.log(error);
          });
        }, [])
    
    const handleClick = () => {
        axios.post('http://localhost:8000/admin/order-response', {
            id
        })
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
        console.log(id);
    }
    return (
        <div>
            <Typography align="center" color="secondary" variant="h4">Welcome to ChomkeDin Admin Panel</Typography>
            <Divider variant="inset" />
            <br />
            <br />
            <Typography variant="h4" color="primary" >Total Order: {totalOrder}</Typography>
            <Typography variant="h5" color="primary" >Current Orders:</Typography>
            <div>
        {order.map((view) => (
            <Paper elevation={3} className={classes.paper} >
      <Typography variant="h5" color="secondary" align="center" gutterBottom>
        Order Time: {moment(view.orderedAt).format('YYYY-MM-DD hh:mm A')}
      </Typography>
      <List disablePadding style={{margin: '10px'}}>
        {view.orderItems.map((product) => (
          <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.title} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant="body2">৳ {product.price} × {product.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          ৳ {view.orderAmount}
          </Typography>
        </ListItem>
      </List>
      <Grid style={{margin: '10px'}} container spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{view.metadata.shipName}</Typography>
          <Typography gutterBottom>{view.metadata.shipNumber}</Typography>
          <Typography gutterBottom>{view.metadata.shipAddress} {view.metadata.billcity} {view.metadata.billState}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Billing
          </Typography>
          <Typography gutterBottom>{view.metadata.billName}</Typography>
          <Typography gutterBottom>{view.metadata.billNumber}</Typography>
          <Typography gutterBottom>{view.metadata.billAddress} {view.metadata.billcity} {view.metadata.billState}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6} lg={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Payment Method</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{view.metadata.payMethod}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Payment Number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{view.metadata.payNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Transaction Id</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{view.metadata.transactionId}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
      <div align="center">
      <Button variant="outlined" size="large" color="primary" onClick={()=> handleClick(setId(view._id))} >Order Shipped</Button>
      </div>
      <br />
    </Paper>
                ) )}
            </div>
        </div>
    )
}

export default AdminPanel
