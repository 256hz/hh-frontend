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
      <div onClick={_ => pageHome()} className="pagination__arrow">
        <div className="triangle-left"></div>
        <div className="triangle-left"></div>
      </div>
      <div className="pagination__arrow">
        <div className="triangle-left" onClick={_ => pageBack()}></div>
      </div>
      {pageList.map( pageNo => {
        return <div className={pageNo === page + 1 ? "pagination__page-no__active" : "pagination__page-no"}
                    onClick={_ => props.changePage(pageNo - 1)}
                    key={'page_' + pageNo}
               >
                {pageNo}
              </div>
      })}
      &nbsp;&nbsp;
      <div className="pagination__arrow">
        <div className="triangle-right" onClick={_ => pageNext()}></div>
      </div>
      &nbsp;&nbsp;
      <div onClick={_ => pageEnd()} className="pagination__arrow">
        <div className="triangle-right"></div>
        <div className="triangle-right"></div>
      </div>
    </div>
  )
}