import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { api_options } from "../utils/constants";


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const trailervideo = useSelector(store => store.movieList.trailerVideo);
    const getvideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',
                        api_options)
        const json = await data.json();
        const trailerFilter = json.results.filter((videotrailer) => videotrailer.type === 'Trailer');
        const trailer = trailerFilter.length ? trailerFilter[0]: json.results[0];
       
        dispatch(addTrailerVideo(trailer))
    }  

    useEffect(()=>{
       !trailervideo && getvideo();
    },[])
}

export default useTrailerVideo;