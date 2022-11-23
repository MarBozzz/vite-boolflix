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
    <div class="container h-100 d-flex justify-content-between align-items-center">

      <div class="logo h-100 d-flex align-items-center">
        <img @click="$emit('goToPopular')" src="../assets/img/logo-boolflix.png" alt="Logo Boolfix">
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
            <option value="" >All</option>
            <option value="movie" selected>Movies</option>
            <option value="tv">Series</option>
          </select>
        </div>
      </div>

    </div>
  </header>
</template>


<style lang="scss" scoped>

@use '../styles/partials/vars' as *;

header {
  height: 80px;
  background-image:
    linear-gradient(
      darken($main-color,0%),
      darken($main-color,20%),
      darken($main-color,40%),
      darken($main-color,60%),
      darken($main-color,80%),
      $main-color 100%
      );
  .logo {
    width: 150px;
  }
  .logo:hover {
    cursor: pointer;
  }
}

</style>
