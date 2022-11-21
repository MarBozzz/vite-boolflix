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
    //functs
  },
  mounted() {
    //mounted
  }
}
</script>


<template>

  <AppHeader />
  <AppMain />

</template>


<style lang="scss">

@use './styles/general' as *;

</style>