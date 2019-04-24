import React from 'react';
import People from './components/People'
import Planet from './components/Planet'
import {Switch, Route} from 'react-router-dom'
import {Container, } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'


function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Switch>
        <Route exact path='/people' component={People} />
        <Route exact path='/planet' component={Planet} />
        <Route component={NoMatch} />
        
        
      </Switch>
    </Container>
    </>
  );
}

export default App;
