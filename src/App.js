import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      apiUrl: 'http://localhost:3000/',
      allColors: [],
      filter: null,
      filteredColors: null
    }
    fetch(this.state.apiUrl)
      .then( res => res.json() )
      .then( allColors => this.setState({ allColors }) )
      .then( _ => this.setState({filteredColors: this.state.allColors}) )
  }

  componentDidMount() {
  }

  filterColors = (filter) => {
    console.log({filter})
    console.log(this.state.filter)
    filter === this.state.filter
      ? this.setState({ filter: null })
      : this.setState({ filter: filter })
    setTimeout(_ => {
      console.log('filter triggered:', this.state.filter)
      this.state.filter
        ? this.setState({filteredColors: this.state.allColors.filter( color => color.family === this.state.filter )})
        : this.setState({filteredColors: this.state.allColors})  
    }, 1)
  }

  render() {
    if (this.state.filteredColors) {
      // console.log("App colors length:", this.state.colors.length)
      return(
        <div className="App">
          <Header />
          <Content colors={this.state.filteredColors} 
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