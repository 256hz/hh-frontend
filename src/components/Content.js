import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

const Page = (props) => {
  if (props.colors) {
    // console.log("Page allColors length:", props.allColors.length)
    return (
      <div className="page">
        <Sidebar filterColors={props.filterColors} />
        <Viewport colors={props.colors} />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default Page