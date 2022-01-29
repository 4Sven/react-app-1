import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
  <Authenticator>
    {({ signOut, user }) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {user.username}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={signOut}>Sign out</button>
    </div>
    )}
    </Authenticator>
  );
}

export default App;

// Docu for Update to new Version: https://ui.docs.amplify.aws/components/authenticator