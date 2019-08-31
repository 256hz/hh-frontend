import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

class Page extends React.Component {
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

  setPageColors = () => {
    console.log('setPageColors hit')
    const num = this.state.perPage
    this.setState({
      pageColors: this.props.colors.slice(
        (this.state.page - 1) * num, 
        (this.state.page - 1) * num + num
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
          {this.props.pageColors
            ? <Viewport 
                colors={this.state.pageColors} 
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

export default Page