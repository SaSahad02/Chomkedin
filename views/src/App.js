import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { CartProvider } from 'react-use-cart';

import Home from './components/Home/Home'
import Anniversary from './components/Collection/Anniversary'

const App = () => {
    return (
      <CartProvider > 
        <BrowserRouter>
          <Container maxWidth="lg">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/anniversary" exact component={Anniversary} />
            </Switch>
          </Container>
        </BrowserRouter>
      </CartProvider>
    )
}

export default App
