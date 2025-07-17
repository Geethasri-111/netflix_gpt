import React from 'react'
import { poster_url } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-28'>
        <img src={poster_url+posterPath} alt="poster"/>
    </div>
  )
}

export default MovieCard