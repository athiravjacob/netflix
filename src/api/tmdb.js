import axios from "axios";
const tmdbapi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

const API = import.meta.env.VITE_TMBD_API;

export const fetchMovie = async (endpoint, params = {}) => {
    
    try {
        const response = await tmdbapi.get(endpoint, {
            params:{api_key :API,...params}
        })
        return response.data.results
    
    } catch (error) {
        console.log(error.message)
    }
}
