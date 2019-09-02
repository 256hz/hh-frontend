import React from 'react';
import Swatch from './Swatch'
import Pagination from './Pagination'
import '../../App.css';

const ColorPage = (props) => {
  if (props.currentPage) {
    return (
      <div className="swatches">
        {props.currentPage.map( (color, i) => {
          return <Swatch color={color.hex}
                         family={color.family}
                         key={i + "_" + color.hex} 
                         hero={false}
                         setHeroColor={props.setHeroColor}
                 /> 
        })}
        <Pagination page={props.page} 
                    setPage={props.setPage} 
                    pageList={props.pageList}
        />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ColorPage