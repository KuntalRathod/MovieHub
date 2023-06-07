import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNmZTk2NmI5MmRjNzFjZjEwMjkyOGYxMjM5ODRhNCIsInN1YiI6IjY0NzQ2MWMxOWFlNjEzMDE0NjY4YWUxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uE4THpbzcD7L5j-rpPyRCV8N9p-dbuRRvgt4a-JxGLw";

const headers ={
    Authorization : "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
    try {
        const {data} = await axios.get(BASE_URL + url, {headers,params})
        return data;
        
    } catch (err) {
        console.log(err);
        return err;
    }
}