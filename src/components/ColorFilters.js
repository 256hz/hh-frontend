import React from 'react';
import { capitalize } from 'lodash';
import { filters } from '../constants';
import '../App.css';

// Populates the list of color filters in the sidebar.  If one is selected, changes that
// filter's background to its color, and font to white with a black textShadow 
// (improved visibility for Yellow in particular).  Uses Lodash's capitalize method.
const ColorFilters = (props) => {
  const { enabledFilter, setColorFilter, setHeroColor } = props
  return (
    <div className="sidebar__color-filters">
      {filters.map( (filter) => {
        return(
          <div onClick={_ => {
                  setColorFilter(filter)
                  setHeroColor(null)
               }}
               className='sidebar__color-filter'
               key={filter}
               id={'filter_' + filter}
               style={{
                 backgroundColor: filter === enabledFilter ? filter : null,
                 color: filter === enabledFilter ? 'white' : '#333',
                 textShadow: filter === enabledFilter ? '0px 0px 3px var(--dark-gray)' : null,
               }}
          >
            {capitalize(filter)}
          </div>
        )
      })}
    </div>
  )
}

export default ColorFilters