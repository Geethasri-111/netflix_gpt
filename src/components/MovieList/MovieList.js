import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({title , movieItems}) => {
    
  return (
    <div className='p-4 relative'>
        <div className='text-3xl font-bold my-5'>
            <h2>{title}</h2>
        </div>
        <div className='flex overflow-x-scroll'>
            <div className='flex  gap-3'>
            {movieItems?.map((movie)=>(
                <MovieCard posterPath={movie.poster_path} key={movie.id}/>
            ))}
            </div>
                   
        </div>
        
    </div>
  )
}

export default MovieList