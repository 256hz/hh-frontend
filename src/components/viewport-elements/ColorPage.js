import React from 'react';
import Swatch from './Swatch'
import Pagination from './Pagination'
import '../../App.css';

const ColorPage = (props) => {
  if (props.pageColors) {
    return (
      <div className="swatches">
        { props.pageColors.map( (color, i) => <Swatch color={color.hex} key={i + "_" + color.hex} /> ) }
        <Pagination page={props.page} changePage={props.changePage} />
      </div>
    )
  } else {
    return(
      <div>Loading...</div>
    ) 
  }
}

export default ColorPage