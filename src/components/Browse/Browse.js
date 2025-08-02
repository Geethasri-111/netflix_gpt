import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Header from '../Header/Header'
import { api_options } from '../../utils/constants';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import TrailerContainer from '../TrailerContainer/TrailerContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import GPTSearch from '../GPTSearch/GPTSearch';
import TrailerSecondContainer from '../TrailerSecondContainer/TrailerSecondContainer';
import useUpcomingMovie from '../../hooks/useUpcomingMovie';

const Browse = () => {
  const showgptSearchval = useSelector(store => store.search.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovie();
  return (
    <div>
      <Header/>
      
      {showgptSearchval ?
          <GPTSearch/> 
        :
        <>
          <TrailerContainer/>
          <TrailerSecondContainer/>
        </>
      }
      
    </div>
  )
}

export default Browse