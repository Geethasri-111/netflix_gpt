import React from 'react'
import { useSelector } from 'react-redux'
import { addTrailerVideo } from '../../utils/movieSlice';
import useTrailerVideo from '../../hooks/useTrailerVideo';

const VideoBackground = ({movieId}) => {
    const trailerId = useSelector(store => store.movieList?.trailerVideo);
    useTrailerVideo(movieId);
  return (
    <div className='absolute top-0 w-screen'>
        <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerId?.key+"?si=-5g1RjSMQ5wjJ9Mi&autoplay=1&mute=1" }
        title="YouTube video player"        
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         ></iframe>
    </div>
  )
}

export default VideoBackground