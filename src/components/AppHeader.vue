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
      <div class="d-flex justify-content-between align-items-center">

        <div class="logo">
          <img src="../assets/img/logo-boolflix.png" alt="Logo Boolfix">
        </div>

        <div class="input-area row">
          <div class="col-auto">
          <input v-model.trim="store.apiParams.query" @keyup.enter="$emit('search')" type="text" class="form-control" placeholder="Cerca Titolo">
          </div>
          <div class="col-auto">
            <button @click="$emit('search')" class="btn btn-warning">Cerca</button>
          </div>
          <div class="col-auto">
            <select @change="$emit('search')" v-model="store.type"  class="form-select">
              <option value="" >Select</option>
              <option value="movie" selected>Movies</option>
              <option value="tv">Series</option>
            </select>
          </div>
        </div>

      </div>
    </div>
    
  </header>
</template>


<style lang="scss" scoped>

header {
  height: 80px;
  background-color: black;
  .logo {
    width: 150px;
  }
}

</style>
