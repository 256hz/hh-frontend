import React from 'react';
import { capitalize } from 'lodash'
import { filters } from '../constants'
import '../App.css';

const ColorFilters = (props) => {
  const { enabledFilter, filterColorsMethod } = props
  return (
    <div className="sidebar__color-filters">
      {filters.map( (filter) => {
        return(
          <div onClick={_ => filterColorsMethod(filter)}
               key={filter}
               style={{color: filter === enabledFilter ? filter : '#333'}}
          >
            {capitalize(filter)}
          </div>
        )
      })}
    </div>
  )
}

export default ColorFilters