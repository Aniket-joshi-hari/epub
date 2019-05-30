import React, { Component } from 'react';
import classes from './App.css';
import Books from '../components/Books/Books';
import Epub from '../components/Books/Epub';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
     console.log('this aap.js is inside constructor',props  );
     this.state={
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false

     };
  }
  
  

  render () {
   

    return (
      <BrowserRouter>
      
      <div>
      
      <Route path="/" component={Books}/>
      <Route path="/epub" component={Epub}/>
     
    
      
      
     
      </div>
     
      </BrowserRouter>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
