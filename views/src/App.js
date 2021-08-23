import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { CartProvider } from 'react-use-cart';

import Home from './components/Home/Home'
import Anniversary from './components/Collection/Anniversary'
import Payment from './components/Purchase/Pay.js'
import Address from './components/Purchase/Info.js'
import Order from './components/Purchase/Order.js'
import Confirm from './components/Purchase/Confirm.js'

const App = () => {
    return (
      <CartProvider > 
        <BrowserRouter>
          <Container maxWidth="lg">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/anniversary" exact component={Anniversary} />
                <Route path="/order-overview" exact component={Order} />
                <Route path="/order-confirmation" exact component={Confirm} />
                <Route path="/payment" exact component={Payment} />
                <Route path="/address" exact component={Address} />
            </Switch>
          </Container>
        </BrowserRouter>
      </CartProvider>
    )
}

export default App
