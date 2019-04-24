import React from 'react';
import People from './components/People'
import {Switch, Route} from 'react-router-dom'
import {Container, } from 'semantic-ui-react'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Switch>
        <Route exact path='/people' component={People} />
        {/* <Route exact path='/planet' component={Planet} /> */}
        
        
      </Switch>
    </Container>
    </>
  );
}

export default App;
