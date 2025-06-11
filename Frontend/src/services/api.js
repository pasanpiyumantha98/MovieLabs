const Base_URL="https://api.themoviedb.org/3";
const API_Key="8f4039166170e337068f6d84c8ccee7f";



export async function PopMovies()
{
const response = await fetch(`${Base_URL}/movie/popular?api_key=${API_Key}`);
const data = await response.json()
return data.results;
}


export async function SearchMovies(query)
{
const response = await fetch(`${Base_URL}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(query)}`)
const data = await response.json()
return data.results;  
}