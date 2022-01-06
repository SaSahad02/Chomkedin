import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'

import data from '../Data/BirthdayPack.js'
import Product from './Product.js'


const Birthday = () => {
   
    return (
        <div align="center">
            <div>
           <Typography align="center" gutterBottom variant="h3" color="secondary">
           Birthday
               </Typography> 
            <Divider variant="middle" gutterBottom />
            </div>
            <br />
            <div>

        <Grid xs={12} container justify="space-around" spacing={1} >
                {data.productData.map((item, index) => {
                    return (
                        <Product item={item} key={index} price={item.price} title={item.title} img={item.img} />
                        )
                    })}

        </Grid>
                    </div>
                    <br />
        </div>
    )
}

export default Birthday
