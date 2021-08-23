import React from 'react'
import { Button, Card, Typography, } from '@material-ui/core'
import { useCart } from 'react-use-cart'

const Product = (props) => {
    const { addItem } = useCart()
    return (
        <Card align="center">
                 <img  height="450" width="350" src={props.img} alt="img" />
                <br />
                <Typography gutterBottom variant="h5" color="primary">
                    {props.title} </Typography>
                <Typography gutterBottom color="secondary" variant="h4">৳{props.price}</Typography>
                <Button size="large" fullWidth
                onClick={()=> addItem(props.item)}
                color="primary" variant="contained">
                   <Typography variant="h5">
                   🛒 Add To Cart
                    </Typography>
                    </Button>
        </Card>
    )
}

export default Product
