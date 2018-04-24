import React, { Fragment } from 'react'
import SearchComponent from './SearchComponent/SearchComponent'
import IconToHomeComponent from './SearchComponent/IconToHomeComponent'
import './SearchBar.css'

const searchBar = () => (
  <Fragment>
    <div role='search'>
      <SearchComponent />
    </div>
    <IconToHomeComponent />
  </Fragment>
)

export default searchBar
