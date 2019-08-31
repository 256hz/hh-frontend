import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 1,
      perPage: 12,
      colors: this.props.colors,
      pageColors: null,
      color: null,
    }
  }

  componentDidMount() {
    this.setState({colors: this.props.colors})
    setTimeout(_ => this.setPageColors(), 0)
  }

  setPageColors = () => {
    console.log('setPageColors hit')
    const perPage = this.state.perPage
    this.setState({
      pageColors: this.props.colors.slice(
        this.state.page * perPage, 
        this.state.page * perPage + perPage
      )
    })
  }

  changePage = (page) => {
    this.setState({ page })
  }

  render() {
    if (this.props.colors) {
      return (
        <div className="page">
          <Sidebar filterColors={this.props.filterColors} />
          {this.state.pageColors
            ? <Viewport 
                pageColors={this.state.pageColors} 
                changePage={this.changePage}
                page={this.state.page}
              />
            : <div>Loading...</div>
          }
          
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default Content