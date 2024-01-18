import axios from "axios";

export function getNews(category = 'General') {
    const API_Key = '87c1dec37cc34931a9aea817b7e719f0'
    const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}` 

    return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)
   
}