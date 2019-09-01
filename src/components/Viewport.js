import React from 'react';
import HeroColor from './viewport_elements/HeroColor'
import ColorPage from './viewport_elements/ColorPage'
import '../App.css';

const Viewport = (props) => {
  return (props.pageColors)
    ? (
        <div className="viewport">
          {props.color 
            ? <HeroColor color={props.color} 
                         backToList={props.backToList} 
              />
            : <ColorPage pageColors={props.pageColors} 
                         changePage={props.changePage} 
                         page={props.page}
              />
          }
        </div>
      )
    : <div>Loading...</div>
}

export default Viewport