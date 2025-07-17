import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { api_options } from '../../utils/constants';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import TrailerContainer from '../TrailerContainer/TrailerContainer';
import usePopularMovies from '../../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      <TrailerContainer/>
    </div>
  )
}

export default Browse