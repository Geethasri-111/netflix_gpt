import React from 'react'
import MovieList from '../MovieList/MovieList'
import { useSelector } from 'react-redux'
const TrailerSecondContainer = () => {
  const movieListItems = useSelector(store => store.movieList);
  console.log(movieListItems);
  return (
    movieListItems && (
      <div className='-mt-5 bg-black text-white pl-5'>
        <MovieList title={'nowPlaying'} movieItems={movieListItems?.nowPlayingMovies}/>
        <MovieList title={'Trending'} movieItems={movieListItems?.upcomingMovies}/>
        <MovieList title={'Popular'} movieItems={movieListItems?.popularMovies}/>
        <MovieList title={'upComing'} movieItems={movieListItems.upcomingMovies}/>
        <MovieList title={'Horror'} movieItems={movieListItems.nowPlayingMovies}/>
      </div>
  )
  )
}
export default TrailerSecondContainer
