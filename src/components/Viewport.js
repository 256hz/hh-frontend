import React from 'react';
import HeroColor from './viewport_elements/HeroColor'
import ColorPage from './viewport_elements/ColorPage'
import '../App.css';

const Viewport = (props) => {
  return (props.currentPage)
    ? (
        <div className="viewport">
          {props.heroColor 
            ? <HeroColor color={props.heroColor} 
                         backToList={props.backToList} 
                         setHeroColor={props.setHeroColor}
              />
            : <ColorPage currentPage={props.currentPage} 
                         setPage={props.setPage} 
                         page={props.page}
                         pageList={props.pageList}
                         setHeroColor={props.setHeroColor}
              />
          }
        </div>
      )
    : <div>Loading...</div>
}

export default Viewport