<script>

import {store} from '../data/store';

import AppCard from './AppCard.vue';


export default {
  name : 'AppMain',
  data() {
    return {
      store
    }
  },
  components : {
    AppCard
  }
}
</script>

<template>
  <main>
    <div class="container">
      MAIN
      <ul>
        <li v-for="movie in store.movieList" :key="movie.id">{{movie.title+' '+movie.original_title+' '+movie.original_language+' '+movie.vote_average}}</li>
      </ul>
    <AppCard />
    </div>
  </main>
</template>


<style lang="scss" scoped>

</style>