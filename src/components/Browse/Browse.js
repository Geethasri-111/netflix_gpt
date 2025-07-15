import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { api_options } from '../../utils/constants';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import TrailerContainer from '../TrailerContainer/TrailerContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <TrailerContainer/>
    </div>
  )
}

export default Browse