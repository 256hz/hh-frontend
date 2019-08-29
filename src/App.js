import React from 'react';
import Header from './components/Header'
import Page from './components/Page'
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Page />
      </div>
    )
  }
}
export default App;