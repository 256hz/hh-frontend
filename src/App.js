import React from 'react';
import Header from './components/Header'
import Page from './components/Page'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      apiUrl: 'http://localhost:3000/',
      colors: []
    }
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then( res => res.json() )
      .then( colors => this.setState({ colors }) )
  }

  render() {
    if (this.state.colors) {
      // console.log("App colors length:", this.state.colors.length)
      return(
        <div className="App">
          <Header />
          <Page allColors={this.state.colors} />
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
}
export default App;