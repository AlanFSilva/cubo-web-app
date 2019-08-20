
import axios from 'axios'

const BaseUrl = "https://api.themoviedb.org/3/";
const apiKey = "b4a3bbd0b2057b678ea9497050e199ba";
const langauge = "pt-BR";

export default ({
  getMoviesByTitle: async (page, searchTerm) => {
    return axios({
      method: "GET",
      url: `${BaseUrl}search/movie?api_key==${apiKey}&language=${langauge}&query=${searchTerm}&page=${page}&include_adult=false`
    }).then(response => {return response.data});
  },

  getMoviesByGenre: async (page, searchTerm) => {

  },

  getMoviesByYear: async (page, searchTerm) => {

  },

  getMovieDetails: async (movieId) => {

  },

  getMovieGenres: async () => {
    return axios({
      method: "GET",
      url: `${BaseUrl}genre/movie/list?api_key=${apiKey}&language=${langauge}`
    }).then(response => {return response.data});
  },

});