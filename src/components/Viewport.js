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
      pageColors: [],
      color: null
    }
    console.log("Viewport allColors length:", this.state.allColors.length)
  }
  
  componentDidMount() {
    this.props.allColors && this.setPageColors()
  }

  setPageColors = () => {
    // console.log(this.state)
    // console.log(this.props)
    // this.setState({ allColors: this.props.allColors })
    console.log('viewort allColors slice:', this.state.allColors.slice(0,15))
    this.setState({
      pageColors: this.state.allColors.slice(
        (this.state.page - 1) * 15, 
        (this.state.page - 1) * 15 + 15
      )
    })
      
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