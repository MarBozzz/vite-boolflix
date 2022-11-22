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

    <h1 class="container">
      {{title}}
    </h1>

    <div class="container">
      <div class="row py-5 d-flex flex-wrap">

        <AppCard :card="card" v-for="card in store[type]" :key="card.id"/>

      </div>
    
    </div>
  </main>
</template>


<style lang="scss" scoped>


</style>