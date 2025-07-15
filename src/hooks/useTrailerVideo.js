import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { api_options } from "../utils/constants";


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    
    const getvideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',
                        api_options)
        const json = await data.json();
        const trailerFilter = json.results.filter((videotrailer) => videotrailer.type === 'Trailer');
        const trailer = trailerFilter.length ? trailerFilter[0]: json.results[0];
       
        dispatch(addTrailerVideo(trailer))
    }  

    useEffect(()=>{
        getvideo();
    },[])
}

export default useTrailerVideo;