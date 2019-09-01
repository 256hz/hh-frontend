import React from 'react'
import '../../App.css'

export default function Pagination(props) {
  return(
    <div className="pagination">
      <span className="triangle-left"></span>
      <span className="triangle-left"></span>
      &nbsp;&nbsp;
      <span className="triangle-left"></span>
      &nbsp;&nbsp;
      {'1 2 3 4 5 7 8 9'}
      &nbsp;&nbsp;
      <span className="triangle-right"></span>
      &nbsp;&nbsp;
      <span className="triangle-right"></span>
      <span className="triangle-right"></span>
    </div>
  )
}