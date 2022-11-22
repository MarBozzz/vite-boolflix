<script>

export default {
  name : 'AppCard',
  props : {
    card : Object
  },
}
</script>

<template>

  <div class="col-3">

    <div class="mb-card my-2">
      <p>{{card.title || card.name}}</p>
      <p>{{card.original_title || card.original_name}}</p>
      <p>{{card.vote_average}}</p>
      <i class="fi fi-gb" v-if="card.original_language ==='en'"></i>
      <i class="fi fi-it" v-else-if="card.original_language ==='it'"></i>
      <i class="fi fi-fr" v-else-if="card.original_language ==='fr'"></i>
      <i class="fi fi-jp" v-else></i>
      
    </div>
    
  </div>
    
</template>


<style lang="scss" scoped>
.mb-card {
  color: black;
  background-color: white;
  height: 200px;
}
</style>