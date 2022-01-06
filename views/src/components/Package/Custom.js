import React from 'react'
import { Typography, Grid, Divider, Box } from '@material-ui/core'

import data from '../Data/CustomPack.js'
import Product from './Product.js'


const Custom = () => {
   
    return (
        <div>
            <div>
           <Typography align="center" gutterBottom variant="h3" color="secondary">
           Customize Package
               </Typography> 
            <Divider variant="middle" gutterBottom />
            </div>
            <br />
            <div>

        <Grid xs={12} container justify="space-between" spacing={1} >
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

export default Custom
