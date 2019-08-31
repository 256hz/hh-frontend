import React from 'react';
import { capitalize } from 'lodash'
import { filters } from '../constants'
import '../App.css';

const ColorFilters = (props) => {
  return (
    <div className="sidebar__color-filters">
      {filters.map( (filter) => {
        return(
          <div onClick={_ => props.filterColors(filter)}
               key={filter}
          >
            {capitalize(filter)}
          </div>
        )
      })}
    </div>
  )
}

export default ColorFilters