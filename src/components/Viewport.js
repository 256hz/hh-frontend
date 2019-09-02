import React from 'react';
import HeroColor from './viewport_elements/HeroColor'
import ColorPage from './viewport_elements/ColorPage'
import '../App.css';

// Child of Content.  Checks for a heroColor in props and renders that or a page
// of colors if it's not present.
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
    : null
}

export default Viewport