import React from 'react';
import HeroColor from './viewport-elements/HeroColor'
import ColorPage from './viewport-elements/ColorPage'
import '../App.css';

const Viewport = (props) => {
  return (props.colors)
    ? (
        <div className="viewport">
          {props.color 
            ? <HeroColor color={props.color} />
            : <ColorPage pageColors={props.colors} />
          }
        </div>
      )
    : <div>Loading...</div>
}

export default Viewport