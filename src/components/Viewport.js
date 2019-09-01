import React from 'react';
import HeroColor from './viewport_elements/HeroColor'
import ColorPage from './viewport_elements/ColorPage'
import '../App.css';

const Viewport = (props) => {
  return (props.currentPage)
    ? (
        <div className="viewport">
          {props.color 
            ? <HeroColor color={props.color} 
                         backToList={props.backToList} 
              />
            : <ColorPage currentPage={props.currentPage} 
                         changePage={props.changePage} 
                         page={props.page}
                         pageList={props.pageList}
              />
          }
        </div>
      )
    : <div>Loading...</div>
}

export default Viewport