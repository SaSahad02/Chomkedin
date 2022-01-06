import React from 'react'
import { Typography, Grid, Divider, Box, Button } from '@material-ui/core'

import data from '../Data/CustomPack.js'
import Product from './Product.js'


const Custom = () => {

    const [newData, setNewData] = React.useState([])
    const [show, setShow] = React.useState('paris')

    const handleClick = (e) => {
        setShow(e)
        const filterData = data.productData.filter(obj => {
            return obj.tag === e
          })
        setNewData(filterData)  
    }
    const filterData = data.productData.filter(obj => {
        return obj.tag === 'paris'
      })
   
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
            <Box  
                  justifyContent="space-around"
                  alignItems="center"
                  flexDirection="row"
                  display="flex">

            <Button onClick={()=>handleClick('paris')} size="large" variant={show === "paris" ? "contained" : "outlined"} color="secondary" >Paris Buggette Cake</Button>         
            <Button onClick={()=>handleClick('crumb')} size="large" variant={show === "crumb" ? "contained" : "outlined"} color="secondary" >Cake Crumbs Cake</Button>         
            <Button onClick={()=>handleClick('treat')} size="large" variant={show === "treat" ? "contained" : "outlined"} color="secondary" >Tasty Treat Cake</Button>         
            <Button onClick={()=>handleClick('chadni')} size="large" variant={show === "chadni" ? "contained" : "outlined"} color="secondary" >Chadni Chwak Cake</Button>         
            <Button onClick={()=>handleClick('chocolate')} size="large" variant={show === "chocolate" ? "contained" : "outlined"} color="secondary" >Chocolate</Button>         
            <Button onClick={()=>handleClick('candle')} size="large" variant={show === "candle" ? "contained" : "outlined"} color="secondary" >Candle</Button>         
            <Button onClick={()=>handleClick('others')} size="large" variant={show === "others" ? "contained" : "outlined"} color="secondary" >Others</Button>         
            </Box>
            </div>
            <div>

        <Grid xs={12} container justify="space-around" spacing={1} >
                {!newData.length ? filterData.map((item, index) => {
                    return (
                        <Product item={item} key={index} price={item.price} title={item.title} img={item.img} />
                        )
                    }) : newData.map((item, index) => {
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
