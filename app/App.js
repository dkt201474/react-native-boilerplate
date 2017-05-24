import React, { Component } from 'react';

// Screens
import { SignUpForm, SignIn, SignUpValidation, } from './lib/screens';

class App extends Component {
  render () {
    return (
    //  <SignUpValidation />
     <SignIn />
    //  <SignUpForm />
    );
  }
}

export default App;
