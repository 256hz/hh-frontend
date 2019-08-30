import React from 'react';
import HeroColor from './viewport-elements/HeroColor'
import ColorPage from './viewport-elements/ColorPage'
import '../App.css';

class Viewport extends React.Component {
  constructor() {
    super()
    this.state={
      page: 0,
      color: null
    }
  }

  render() {
    return(
      <div className="viewport">
        hi
        {this.state.color 
          ? <HeroColor color={this.state.color} />
          : <ColorPage page={this.state.page} />
        }
      </div>
    )
  }
}

export default Viewport