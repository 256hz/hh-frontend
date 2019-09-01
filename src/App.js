import React from 'react';
import Header from './components/Header';
import Content from './components/Content';  
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      apiUrl: 'http://localhost:3000/',
      colorsAll: [],
      enabledFilter: null,
      colorsFiltered: null
    }
    fetch(this.state.apiUrl)
      .then( res => res.json() )
      .then( colorsAll => this.setState({ colorsAll, colorsFiltered: colorsAll }) )
  }

  filterColorsMethod = (filter) => {
    // console.log({filter})
    // console.log('old filter:', this.state.enabledFilter)
    filter === this.state.enabledFilter
      ? this.setState({ enabledFilter: null })
      : this.setState({ enabledFilter: filter })
    setTimeout(_ => {
      // console.log('filter triggered:', this.state.enabledFilter)
      this.state.enabledFilter
        ? this.setState({
            colorsFiltered: this.state.colorsAll.filter( color => color.family === this.state.enabledFilter )
          })
        : this.setState({colorsFiltered: this.state.colorsAll})  
    }, 0)
  }

  render() {
    if (this.state.colorsFiltered) {
      return(
        <div className="App">
          <Header />
          <Content colorsFiltered={this.state.colorsFiltered} 
            filterColorsMethod={this.filterColorsMethod}
            enabledFilter={this.state.enabledFilter}
          />
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}
export default App;