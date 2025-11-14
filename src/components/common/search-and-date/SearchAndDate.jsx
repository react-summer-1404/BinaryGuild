import React from 'react'
import Search from './search/Search'
import Date from './date/Date'

const SearchAndDate = ({setFilter}) => {
  return (
    <div className='flex flex-nowrap gap-4 w-11/12'>
      <Search setFilter={setFilter}/>
      <Date setFilter={setFilter}/>
    </div>
  )
}

export default SearchAndDate
