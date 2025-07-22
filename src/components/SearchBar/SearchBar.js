import React from 'react';
import {useSelector} from 'react-redux'
import langVar from '../../utils/languageConstants'

const SearchBar = () => {
  
  const configLang = useSelector(store => store.config.lang);
  console.log(configLang)
  return (
    <div>
      <form className='pt-28 p-4 flex bg-black'>
        <input className='p-4 m-4 border-2 w-full' type="text" 
        placeholder={langVar[configLang].placeholder}/>
        <button className='px-4 py-1 bg-red-700 rounded-lg m-4 text-white'>
          {langVar[configLang].search}</button>
      </form>
    </div>
  )
}

export default SearchBar