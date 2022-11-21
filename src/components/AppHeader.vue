<script>

import { store } from '../data/store';


export default {
  name : 'AppHeader',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">

        <div class="col-auto">
          <input v-model.trim="store.titleToSearch" type="text" class="form-control" placeholder="Cerca Titolo">
        </div>
        <div class="col-auto">
          <button @click="$emit('startSearch')" class="btn btn-warning">Cerca</button>
        </div>
        <div class="col-auto">
          <select class="form-select">
            <option value="" selected>Secect</option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
          </select>
      </div>
      
      </div>
    </div>
    
  </header>
</template>


<style lang="scss" scoped>

header {
  height: 80px;
  background-color: black;
}

</style>