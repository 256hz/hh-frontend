import React, { useState } from 'react'
import logo from './images/logo.svg'

export default function Header(props) {
  const [search, setSearch] = useState('')
  // Search not implemented
  // const submitSearch = value => {
  //   props.search(value)
  // }
  return(
    <div className="header">
      <div className="header__logo" 
           onClick={_ => props.clearColorFilter()} 
      >
        <img src={logo} 
            alt="Helpful Human logo"
        />
      </div>
      <input value={search}
             className="header__search"
             placeholder="  Search"
             onChange={ev => setSearch(ev.target.value)}
      />
    </div>
  )
}