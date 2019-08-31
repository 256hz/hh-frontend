import React from 'react';
import HeroColor from './viewport-elements/HeroColor'
import ColorPage from './viewport-elements/ColorPage'
import '../App.css';

class Viewport extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 1,
      perPage: 12,
      pageColors: null,
      color: null
    }
  }
  
  componentDidUpdate() {
    this.setPageColors()
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
    return (this.state.colors)
      ? (
          <div className="viewport">
            {this.state.color 
              ? <HeroColor color={this.state.color} />
              : <ColorPage pageColors={this.state.pageColors} />
            }
          </div>
        )
      : <div>Loading...</div>
  }
}

export default Viewport