import React from 'react';
import Header from './components/Header'
import Content from './components/Content'  
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      apiUrl: 'http://localhost:3000/',
      colorsAll: [],
      filter: null,
      colorsFiltered: null
    }
    fetch(this.state.apiUrl)
      .then( res => res.json() )
      .then( colorsAll => this.setState({ colorsAll }) )
      .then( _ => this.setState({colorsFiltered: this.state.colorsAll}) )
  }

  componentDidMount() {
  }

  filterColors = (filter) => {
    console.log({filter})
    console.log('old filter:', this.state.filter)
    filter === this.state.filter
      ? this.setState({ filter: null })
      : this.setState({ filter: filter })
    setTimeout(_ => {
      console.log('filter triggered:', this.state.filter)
      this.state.filter
        ? this.setState({colorsFiltered: this.state.colorsAll.filter( color => color.family === this.state.filter )})
        : this.setState({colorsFiltered: this.state.colorsAll})  
    }, 0)
  }

  render() {
    if (this.state.colorsFiltered) {
      return(
        <div className="App">
          <Header />
          <Content colors={this.state.colorsFiltered} 
            filterColors={this.filterColors}
          />
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