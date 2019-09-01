import React from 'react';
import { capitalize } from 'lodash';
import { filters } from '../constants';
import '../App.css';

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
               key={filter}
               style={{
                 color: filter === enabledFilter ? 'white' : '#333',
                 backgroundColor: filter === enabledFilter ? filter : null,
                 textShadow: filter === enabledFilter ? '0px 0px 3px var(--dark-gray)' : null,
                 borderTopRightRadius: 'var(--swatch-border-radius)',
                 borderBottomRightRadius: 'var(--swatch-border-radius)',
                 
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