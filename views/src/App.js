import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { CartProvider } from 'react-use-cart';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Anniversary from './components/Collection/Anniversary'
import Birthday from './components/Collection/Birthday'
import Custom from './components/Collection/Custom'
import Cart from './components/AddToCart/Index.js'
import Payment from './components/Purchase/Pay.js'
import Address from './components/Purchase/Info.js'
import Order from './components/Purchase/Order.js'
import Confirm from './components/Purchase/Confirm.js'
import adminPanel from './components/Admin/AdminPanel.js'

const App = () => {
    return (
      <CartProvider > 
        <BrowserRouter>
          <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/anniversary" exact component={Anniversary} />
                <Route path="/birthday" exact component={Birthday} />
                <Route path="/custom" exact component={Custom} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/order-overview" exact component={Order} />
                <Route path="/order-confirmation" exact component={Confirm} />
                <Route path="/payment" exact component={Payment} />
                <Route path="/address" exact component={Address} />
                <Route path="/admin-panel" exact component={adminPanel} />
            </Switch>
          </Container>
        </BrowserRouter>
      </CartProvider>
    )
}

export default App
