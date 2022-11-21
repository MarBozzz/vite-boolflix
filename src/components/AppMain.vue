<script>

import { store } from '../data/store';

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
    MAIN
    <AppCard />
  </main>
</template>


<style lang="scss" scoped>

</style>