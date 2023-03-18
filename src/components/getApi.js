import axios from "axios";

export const API_KEY = "ad4f944751293854af043da5c16df386";
export const API_URL = `https://api.themoviedb.org/3/`;
export const IMAGE_PATH = "https://image.tmdb.org/t/p/original";


export const requests =  {
    // fecthDiscover:`${API_URL}movie/550?api_key${API_KEY}`,
    fetchTrending: `${API_URL}trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflix: `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAction: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `${API_URL}search/movie?api_key=${API_KEY}&query=`
}




const fecthMovies = async (typeFecth,query) => {         

    const typeGet= typeFecth ? typeFecth : requests.fetchTrending;

    console.log(typeFecth)

    const {data: {results} } = await axios.get(`${typeGet}`,{params:{query}})
    
    return results;
     
  }


export default fecthMovies;