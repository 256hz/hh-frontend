import React from 'react'
import '../../App.css'

export default function Pagination(props) {
  const { page, pageList } = props
  const totalPages = pageList.length
  const pageHome = () => { props.changePage(0) }
  const pageBack = () => { page > 0 && props.changePage(page - 1) }
  const pageNext = () => { page < totalPages - 1 && props.changePage(page + 1) }
  const pageEnd = () => { props.changePage(totalPages - 1) }
  
  return(
    <div className="pagination">
      <span onClick={_ => pageHome()}>
        <span className="triangle-left"></span>
        <span className="triangle-left"></span>
      </span>
      &nbsp;&nbsp;
      <span className="triangle-left" onClick={_ => pageBack()}></span>
      &nbsp;&nbsp;
      {pageList.map( pageNo => {
        return <span className={pageNo === page ? "pagination__page-no__active" : "pagination__page-no"}
                     onClick={_ => props.changePage(pageNo - 1)}
               >
                {pageNo}&nbsp;
              </span>
      })}
      &nbsp;&nbsp;
      <span className="triangle-right" onClick={_ => pageNext()}></span>
      &nbsp;&nbsp;
      <span onClick={_ => pageEnd()}>
        <span className="triangle-right"></span>
        <span className="triangle-right"></span>
      </span>
    </div>
  )
}