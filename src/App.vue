<script>
//npm i axios
import axios from 'axios';

import { store } from './data/store'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name : 'App',
  data(){
    return {
      store
    }
  },
  components : {
    AppHeader,
    AppMain,
  },
  methods : {
    getMovieData(type, isPopular = false){
      let apiUrl;
      if(isPopular) apiUrl = 'https://api.themoviedb.org/3/movie/popular/'
      else apiUrl = store.apiUrl + type
      axios.get(apiUrl, {
        params:
          store.apiParams
        }
      )
      .then( response => {
        store[type] = response.data.results;
      })
      .catch( error => {
        console.log(error);
      })
    },
    startSearch(){
      store.movie = [];
      store.tv = [];
      if(store.type === ''){
        this.getMovieData('movie');
        this.getMovieData('tv');
      } else {
        this.getMovieData(store.type)
      } 
    }
  },
  mounted() {
    this.getMovieData('movie', true)
  }
}
</script>


<template>

  <AppHeader @search="startSearch" />
  <AppMain v-if="store.movie.length > 0" title="Movie" type="movie" />
  <AppMain v-if="store.tv.length > 0" title="Serie" type="tv" />

</template>


<style lang="scss">

@use './styles/general' as *;

</style>