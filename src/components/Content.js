import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 0,
      perPage: 12,
      pageList: [],
      colorsFiltered: [],
      pageColors: null,
      color: null,
    }
  }

  componentDidMount() {
    this.setState({ colorsFiltered: this.props.colorsFiltered })
    this.setPageList()
  }

  componentDidUpdate() {
    if (this.props.colorsFiltered !== this.state.colorsFiltered) {
      this.setState({colorsFiltered: this.props.colorsFiltered})
    }
    setTimeout(_ => this.setPageColors(), 0)
  }

  setPageColors = () => {
    // console.log('setPageColors hit')
    const { page, perPage, colorsFiltered } = this.state
    this.setState({
      pageColors: colorsFiltered.slice(
        page * perPage, 
        page * perPage + perPage
      )
    })
  }

  setPageList = () => {
    const { colorsFiltered, perPage } = this.state
    const totalPages = (colorsFiltered.size / perPage) + 2
    let pageList = []
    let i = 1
    while (i < totalPages) {
      pageList.push(i++)
    }
    this.setState({ pageList })
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
            ? <Viewport color={this.state.color}
                changePage={this.changePage}
                page={this.state.page}
                pageColors={this.state.pageColors}
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