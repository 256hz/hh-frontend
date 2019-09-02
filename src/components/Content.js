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
      heroColor: null,
    }
  }

  componentDidMount() {
    if (this.props.colorsFiltered !== this.state.colorsFiltered) {
      this.setState({ colorsFiltered: this.props.colorsFiltered })
      setTimeout(_ => {
        this.setPageColors()
        this.setPageList()
      }, 50)
    }
  }

  componentDidUpdate() {
    if (this.props.colorsFiltered !== this.state.colorsFiltered) {
      this.setState({colorsFiltered: this.props.colorsFiltered})
      setTimeout(_ => {
        this.setPageList()
        this.setPageColors()
        this.setState({ page: 0 })
      }, 50)
    }
  }
  
  setHeroColor = (heroColor) => {
    heroColor !== this.state.heroColor
      ? this.setState({ heroColor })
      : this.setState({ heroColor: null })
  }
  
  setPage = (page) => {
    this.setState({ page })
    setTimeout(_ => this.setPageColors(), 50)
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
    this.setState({ pageList })
    // console.log(totalPages)
  }

  setRandomHeroColor = () => {
    const { colorsAll } = this.props
    const randomIndex = Math.floor(colorsAll.length * Math.random())
    this.setState({
      heroColor: colorsAll[randomIndex].hex
    })
    this.props.clearColorFilter()
    // console.log({randomIndex})
    // console.log(colorsAll[randomIndex])
  }

  render() {
    if (this.props.colorsFiltered) {
      return (
        <div className="content">
          <Sidebar enabledFilter={this.props.enabledFilter}
            setColorFilter={this.props.setColorFilter}
            setHeroColor={this.setHeroColor}
            setRandomHeroColor={this.setRandomHeroColor}
          />
          {this.state.currentPage
            ? <Viewport heroColor={this.state.heroColor}
                setPage={this.setPage}
                currentPage={this.state.currentPage}
                page={this.state.page}
                pageList={this.state.pageList}
                setHeroColor={this.setHeroColor}
              />
            : null
          }
          
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default Content