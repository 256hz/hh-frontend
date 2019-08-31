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
      colorsFiltered: this.props.colorsFiltered,
      pageColors: null,
      color: null,
    }
  }

  componentDidUpdate() {
    if (this.props.colorsFiltered !== this.state.colorsFiltered) {
      this.setState({colorsFiltered: this.props.colorsFiltered})
      setTimeout(_ => this.setPageColors(), 0)
    }
  }

  setPageColors = () => {
    console.log('setPageColors hit')
    const perPage = this.state.perPage
    this.setState({
      pageColors: this.state.colorsFiltered.slice(
        this.state.page * perPage, 
        this.state.page * perPage + perPage
      )
    })
  }

  changePage = (page) => {
    this.setState({ page })
  }

  render() {
    if (this.props.colorsFiltered) {
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