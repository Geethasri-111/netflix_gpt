import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from '../VideoTitle/VideoTitle';
import VideoBackground from '../VideoBackground/VideoBackground';

const TrailerContainer = () => {

    const moviesList = useSelector((store)=>store.movieList?.nowPlayingMovies);
    if(moviesList ===null) return ;
    const movieDetail = moviesList[0];
    const {title,overview,id} = movieDetail;
  return (
    <div className='relative'>
        <VideoTitle title={title} description={overview}/>
        <VideoBackground movieId={id}/>
        
    </div>
    
  )
}

export default TrailerContainer
