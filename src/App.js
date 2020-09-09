import React from 'react';

import './scss/globalVariables.scss';
import './App.scss';

import Header from './components/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header triesCount="20" />
      </div>
    );
  }
}

export default App;
