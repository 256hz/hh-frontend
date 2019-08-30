import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

const Page = (props) => {
  if (props.allColors.length > 0) {
    console.log("Page allColors length:", props.allColors.length)
    return (
      <div className="page">
        <Sidebar />
        <Viewport allColors={props.allColors} />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default Page