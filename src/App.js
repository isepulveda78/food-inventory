import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Grocery from './pages/Grocery'
import AddFood from './pages/AddFood'
import UpdateFood from './pages/UpdateFood'
import AddGrocery from './pages/AddGrocery'
import UpdateGrocery from './pages/UpdateGrocery'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
  <Router>
    <Nav />
    <Toaster position='top-right' />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/grocery" component={Grocery} />
      <Route exact path="/addFood" component={AddFood} />
      <Route exact path="/updateFood/:id" component={UpdateFood} />
      <Route exact path="/addGrocery" component={AddGrocery} />
      <Route exact path="/updateGrocery/:id" component={UpdateGrocery} />
    </Switch>
  </Router>
  )
}

export default App;
