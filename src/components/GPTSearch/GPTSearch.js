import SearchBar from "../SearchBar/SearchBar"
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion"

const GPTSearch = () => {
  return (
    <div className="absolute w-full">
        <SearchBar/>
        <SearchSuggestion/> 
    </div>
  )
}

export default GPTSearch