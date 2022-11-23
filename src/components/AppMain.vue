<script>

import {store} from '../data/store';

import AppCard from './AppCard.vue';
import AppLoader from "./AppLoader.vue";

export default {
  name : 'AppMain',
  props : {
    title: String,
    type: String
  },
  data() {
    return {
      store
    }
  },
  components : {
    AppCard,
    AppLoader
  },
  computed : {
    checkExistingResults(){
      if (store.movie.length > 0 && store.tv.length > 0) {
        return 'We have found ' + store.movie.length + ' movies and ' +  store.tv.length +' series';
      } else if (store.movie.length > 0 && store.tv.length === 0) {
        return 'We have found ' + store.movie.length + ' movies, but no series';
        } else if (store.movie.length === 0 && store.tv.length > 0) {
          return 'We have found ' + store.tv.length + ' series, but no movies';
          } else return 'Sorry, we have found no movies or series for this research, try another one'
    },
  }
  
}
</script>

<template>
  <main>
    <div v-if="store.isLoaded" class="wrapper">
      <audio controls autoplay class="d-none">
        <source src="../assets/audio/Netflix-Intro-Sound-Effect.mp3" type="audio/mpeg">
      </audio>

      <div class="container d-flex align-items-center flex-column py-3">
        <p>{{checkExistingResults}}</p>
        <h1>{{title}} available</h1>
      </div>

      <div class="container">
        <div class="row py-3 d-flex flex-wrap">
          <AppCard :card="card" v-for="card in store[type]" :key="card.id"/>
        </div>
      </div>
    </div>
    <div v-else>
      <AppLoader title="Loading....." />
    </div>
  </main>
</template>


<style lang="scss" scoped>


</style>