import React from 'react'
import '../../App.css'

export default function Pagination(props) {
  return(
    <div className="pagination">
      <span onClick={_ => props.pageHome()}>
        <span className="triangle-left"></span>
        <span className="triangle-left"></span>
      </span>
      &nbsp;&nbsp;
      <span className="triangle-left" onClick={_ => props.pageBack()}></span>
      &nbsp;&nbsp;
      {'1 2 3 4 5 7 8 9'}
      &nbsp;&nbsp;
      <span className="triangle-right" onClick={_ => props.pageNext()}></span>
      &nbsp;&nbsp;
      <span onClick={_ => props.pageEnd()}>
        <span className="triangle-right"></span>
        <span className="triangle-right"></span>
      </span>
    </div>
  )
}