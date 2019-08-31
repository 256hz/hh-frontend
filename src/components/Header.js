import React, { useState } from 'react'
import logo from './images/logo.svg'

export default function Header(props) {
  const [search, setSearch] = useState('')
  const submitSearch = value => {
    props.search(value)
  }
  return(
    <div className="header">
      <img src={logo} 
           className="logo" 
           alt="Helpful Human logo"
      />
      <input value={search}
             className="header__search"
             placeholder="  Search"
             onChange={ev => setSearch(ev.target.value)}
             onSubmit={ev => submitSearch(ev.target.value)}
      />
    </div>
  )
}