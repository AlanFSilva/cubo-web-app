
import axios from 'axios'

const BaseUrl = "https://api.themoviedb.org/3/";
const apiKey = "b4a3bbd0b2057b678ea9497050e199ba";
const langauge = "pt-BR";

export default ({
  getMoviesByTitle: async (page, searchTerm) => {
    return axios({
      method: "GET",
      url: `${BaseUrl}search/movie?api_key=${apiKey}&language=${langauge}&query=${searchTerm}&page=${page}&include_adult=false`
    }).then(response => {return response.data})
    .catch(function (error) {
      console.log(error);
    });
  },

  getMoviesByGenre: async (page, searchTerm) => {
    return axios({
      method: "GET",
      url: `${BaseUrl}discover/movie?with_genres=${searchTerm}&api_key=${apiKey}&language=${langauge}&page=${page}&include_adult=false`
    }).then(response => {return response.data}) 
    .catch(function (error) {
      console.log(error);
    });
  },

  getMoviesByYear: async (page, searchTerm) => {
    return axios({
      method: "GET",
      url: `${BaseUrl}discover/movie?primary_release_year=${searchTerm}&api_key=${apiKey}&language=${langauge}&page=${page}&include_adult=false`
    }).then(response => {return response.data}) 
    .catch(function (error) {
      console.log(error);
    });
  },

  getMovieDetails: async (movieId) => {
    return axios({
      method: "GET",
      url: `${BaseUrl}movie/${movieId}?api_key=${apiKey}&language=${langauge}&append_to_response=videos`
    }).then(response => {return response.data})
    .catch(function (error) {
      console.log(error);
    });
  },

  getMovieGenres: async () => {
    return axios({
      method: "GET",
      url: `${BaseUrl}genre/movie/list?api_key=${apiKey}&language=${langauge}`
    }).then(response => {return response.data})
    .catch(function (error) {
      console.log(error);
    });
  },

});