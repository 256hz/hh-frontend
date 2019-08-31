import React from 'react';
import HeroColor from './viewport-elements/HeroColor'
import ColorPage from './viewport-elements/ColorPage'
import '../App.css';

class Viewport extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 1,
      allColors: props.allColors,
      perPage: 12,
      pageColors: [],
      color: null
    }
  }
  
  componentDidMount() {
    this.props.allColors && this.setPageColors()
  }

  setPageColors = () => {
    const num = this.state.perPage
    this.setState({
      pageColors: this.state.allColors.slice(
        (this.state.page - 1) * num, 
        (this.state.page - 1) * num + num
      )
    })
  }

  changePage = (page) => {
    this.setState({ page })
  }

  render() {
    return (this.state.pageColors)
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