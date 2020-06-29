import React from 'react';
import './App.css';
import './tachyons.css';
import SubTotal from './page1/SubTotal';
import PickupFees from './page1/PickupFees';
import Tax from './page1/Tax';
import EstimatedTotal from './page1/EstimatedTotal';
import Secondtable from './page2/secondtable';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={"Firsttable"}>
            <SubTotal />
            <PickupFees />
            <Tax />
            <EstimatedTotal />
          </div>
        </Route>
        <Route path="/table2">
          <Secondtable />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
