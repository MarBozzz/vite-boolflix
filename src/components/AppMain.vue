<script>

import {store} from '../data/store';

import AppCard from './AppCard.vue';


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
    AppCard
  },
}
</script>

<template>
  <main>

    <audio controls autoplay class="d-none">
      <source src="../assets/audio/Netflix-Intro-Sound-Effect.mp3" type="audio/mpeg">
    </audio>

    <div class="container d-flex justify-content-center py-3">
      <h1>{{title}}</h1>
    </div>

    <div class="container">
      <div class="row py-3 d-flex flex-wrap">

        <AppCard :card="card" v-for="card in store[type]" :key="card.id"/>

      </div>
    
    </div>
  </main>
</template>


<style lang="scss" scoped>


</style>