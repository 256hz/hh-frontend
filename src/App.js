import React from 'react';
import Header from './components/Header';
import Content from './components/Content';  
import { apiUrl } from './constants'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      apiUrl: apiUrl,
      colorsAll: [],
      enabledFilter: null,
      colorsFiltered: null
    }
    fetch(this.state.apiUrl)
      .then( res => res.json() )
      .then( colorsAll => this.setState({ colorsAll, colorsFiltered: colorsAll }) )
  }

  setColorFilter = (filter) => {
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
        : this.setState({ colorsFiltered: this.state.colorsAll })  
    }, 0)
  }

  clearColorFilter = () => {
    this.setState({ 
      enabledFilter: null,
      colorsFiltered: this.state.colorsAll
    })
  }

  render() {
    if (this.state.colorsFiltered) {
      return(
        <div className="App">
          <Header clearColorFilter={this.clearColorFilter} />
          <Content colorsAll={this.state.colorsAll}
            colorsFiltered={this.state.colorsFiltered} 
            clearColorFilter={this.clearColorFilter}
            enabledFilter={this.state.enabledFilter}
            setColorFilter={this.setColorFilter}
          />
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}
export default App;