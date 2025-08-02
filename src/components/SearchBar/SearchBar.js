import React,{useRef} from 'react';
import {useSelector} from 'react-redux'
import langVar from '../../utils/languageConstants'
import openAI from '../../utils/openai'

const SearchBar = () => {
  
  const configLang = useSelector(store => store.config.lang);
  const searchInput = useRef(null);
  const handleSearchSubmit = async() => {
      const searchText = searchInput.current.value;
      const QuerySearch = 'Act as a movie suggestion and provide some movies for query'+searchText+'.only give me names of 5 movies';
      //makeapicall toopenAI
      const gptResults = await openAI.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'developer', content: QuerySearch }
        ],
      });

      console.log(gptResults.choices[0].message.content)
      
  }
  return (
    <div>
      <form className='pt-28 p-4 flex bg-black' onSubmit={(e)=> e.preventDefault()}>
        <input className='p-4 m-4 border-2 w-full' type="text" 
        ref={searchInput}
        placeholder={langVar[configLang].placeholder}/>
        <button className='px-4 py-1 bg-red-700 rounded-lg m-4 text-white'
        onClick={handleSearchSubmit}>
          {langVar[configLang].search}</button>
      </form>
    </div>
  )
}

export default SearchBar