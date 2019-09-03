import React from 'react';
import { perPage } from '../constants'
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

/* 
  Main store of state & methods.  Change perPage in ../constants.js to control #/swatches
  shown per page.  Receives the collection of filtered (or unfilitered) colors from App.  
  Passes the heroColor prop down to ColorPage, which triggers showing the hero Swatch 
  vs a page of colors.
*/
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 0,
      perPage,
      pageList: [],
      colorsFiltered: [],
      currentPage: null,
      heroColor: null,
    }
  }

  // On mount, check if the list of colors has changed.  If so, replace the ones in state
  // with the ones from props.  Then, set the pageColors and pageList using below methods.
  // Must be put on the event stack to occur after the proper color list has been set in state.
  componentDidMount() {
    if (this.props.colorsFiltered !== this.state.colorsFiltered) {
      this.setState({ colorsFiltered: this.props.colorsFiltered })
      setTimeout(_ => {
        this.setPageColors()
        this.setPageList()
      }, 50)
    }
  }

  // Same as above - if the list of colored filters has changed, set the pageList and
  // pageColors.  Also set the page to 0 to start from the beginning of the list.
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
  
  // This is triggered by a Swatch or the RandomButton.  If the method returns the same
  // color, this means it's coming from a hero Swatch, and heroColor should be set to null
  // (i.e. return to the previous view).
  setHeroColor = (heroColor) => {
    heroColor !== this.state.heroColor
      ? this.setState({ heroColor })
      : this.setState({ heroColor: null })
  }
  
  // Triggered by a page number in Pagination.  Sets the page, and puts the call to set
  // the colors on the page on the event stack.
  setPage = (page) => {
    this.setState({ page })
    setTimeout(_ => this.setPageColors(), 50)
  }

  // Takes the page no, perPage, & filtered colors from state, and returns that many swatches,
  // starting from that page's position in the list.
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

  // Creates a list of pages for the Pagination element. Finds how many pages the
  // colors should be split into by dividing the total over perPage, and then populates
  // a list from 1 to that number.
  setPageList = () => {
    const { colorsFiltered, perPage } = this.state
    const totalPages = colorsFiltered.length / perPage
    let pageList = []
    let i = 1
    while (i < totalPages) { pageList.push(i++) }
    this.setState({ pageList })
    // console.log(totalPages)
  }

  // Picks a random number from 0-total number of swatches.  Sets that color as hero.
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