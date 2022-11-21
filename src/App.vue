<script>
//npm i axios
import axios from 'axios';

import { store } from './data/store'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Appcard from './components/AppCard.vue'

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
    Appcard
  },
  methods : {
    getMovieData(){
      //https://api.themoviedb.org/3/search/movie?api_key=d18b4066572abd6df624614e95914560&query=pulp+fiction
      //https://api.themoviedb.org/3/search/
      //movie
      //?api_key=d18b4066572abd6df624614e95914560
      //&query=pulp+fiction
      //const apiKey = '?api_key=d18b4066572abd6df624614e95914560';
      //const query = '&query=pulp+fiction';

      axios.get(store.apiUrl+'movie'+store.apiKey+store.query+store.titleToSearch)
      /*axios.get(store.apiUrl+'movie', {
        params:{
          apikey : store.apiKey,
          querystring : store.query,
          //title : store.titleToSearch
        }
      })*/
      .then( response => {
        store.movieList = response.data.results;
        console.log(store.movieList);
      })
      .catch( error => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getMovieData();
  }
}
</script>


<template>

  <AppHeader @startSearch="getMovieData()" />
  <AppMain />

</template>


<style lang="scss">

@use './styles/general' as *;

</style>