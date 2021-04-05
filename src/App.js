import React from 'react';
import {Route, Switch} from 'react-router-dom';
import useData from './hooks/useData';
import Nav from './Nav';
import NotFound from './components/NotFound';
import FrontPage from './components/FrontPage';
import OverOns from './components/OverOns';
import OnsMenu from './components/OnsMenu';
import Afrekenen from './components/Afrekenen';

function App() {

  const [foodItems, sausItems] = useData()

  console.log(foodItems)
  console.log(sausItems)

  return (
    <div>
      <Nav />

      <Switch>
        <Route path="/menu" exact><OnsMenu foodItems={foodItems} sausItems={sausItems} /></Route>
        <Route path="/over" exact><OverOns /></Route>
        <Route path="/afrekenen"><Afrekenen /></Route>
        <Route path="/" exact><FrontPage /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
