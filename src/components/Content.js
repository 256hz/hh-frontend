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
      currentPage: null,
      color: null,
    }
  }

  componentDidMount() {
    this.setState({ colorsFiltered: this.props.colorsFiltered })
    setTimeout(_ => this.setPageList(), 0)
  }

  componentDidUpdate() {
    if (this.props.colorsFiltered !== this.state.colorsFiltered) {
      this.setState({colorsFiltered: this.props.colorsFiltered})
      setTimeout(_ => {
        this.setPageList()
        this.setState({ page: 0 })
      }, 0)
    }
    setTimeout(_ => this.setPageColors(), 0)
  }

  setPageColors = () => {
    // console.log('setPageColors hit')
    const { page, perPage, colorsFiltered } = this.state
    this.setState({
      currentPage: colorsFiltered.slice(
        page * perPage, 
        page * perPage + perPage
      )
    })
  }

  setPageList = () => {
    const { colorsFiltered, perPage } = this.state
    const totalPages = colorsFiltered.length / perPage
    let pageList = []
    let i = 1
    while (i < totalPages) { pageList.push(i++) }
    console.log(totalPages)
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
          {this.state.currentPage
            ? <Viewport color={this.state.color}
                changePage={this.changePage}
                page={this.state.page}
                pageList={this.state.pageList}
                currentPage={this.state.currentPage}
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