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
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then( res => res.json() )
      .then( allColors => this.setState({ allColors }) )
      .then( _ => this.setState({filteredColors: this.state.allColors}) )
  }

  filterColors = (filter) => {
    filter === this.state.filter
      ? this.setState({filter: null})
      : this.setState({filter})
    this.setState({filter})
    console.log('filter triggered:', this.state.filter)
    filter !== null
      ? this.setState({filteredColors: this.state.allColors.filter( color => color.family === filter)})
      : this.setState({filteredColors: this.state.allColors})
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