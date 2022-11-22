<script>

export default {
  name : 'AppCard',
  props : {
    card : Object
  },
  methods : {
    getStarsRating(n){
      //console.log(Math.ceil(n/2));
      return Math.ceil(n/2)
    },
    getStarsMissing(n){
      //console.log(5-Math.ceil(n/2));
      return 5-Math.ceil(n/2)
    },
  },
  computed : {
    getImageUrl(){
      const imageSize = 'w342'
      const baseUrl = 'https://image.tmdb.org/t/p/'
      return baseUrl+imageSize+this.card.poster_path;
    }
  },
}

</script>


<template>

  <div class="col-3">
    <div class="mb-card my-2">

      <div class="front-card">
        <img :src="getImageUrl" alt="{{card.title}}">
      </div>
      
      <div class="back-card">
        <p>{{card.title || card.name}}</p>
        <p>{{card.original_title || card.original_name}}</p>
  
        <ul class="d-flex">
          <li v-for="star in getStarsRating(card.vote_average)"><i class="fa-solid fa-star"></i></li>
          <li v-for="star in getStarsMissing(card.vote_average)"><i class="fa-regular fa-star"></i></li>
        </ul>
        
        <i class="fi fi-gb" v-if="card.original_language ==='en'"></i>
        <i class="fi fi-it" v-else-if="card.original_language ==='it'"></i>
        <i class="fi fi-fr" v-else-if="card.original_language ==='fr'"></i>
        <i class="fi fi-jp" v-else></i>
      </div>

    </div>
  </div>
    
</template>


<style lang="scss" scoped>
.mb-card {
  color: black;
  background-color: white;
  
  img {
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
}
</style>