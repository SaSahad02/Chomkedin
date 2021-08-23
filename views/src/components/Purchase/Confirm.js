import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const Confirm = () => {
    return (
        <Paper style={{marginTop: '30px', padding: '10px'}} elevation={2}>
            <Typography variant="h5" gutterBottom>Thank you for your order.</Typography>
            <Typography variant="h6">We will send you an update when your order has shipped.</Typography>
        </Paper>
    )
}

export default Confirm
