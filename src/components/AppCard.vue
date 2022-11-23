<script>

export default {
  name : 'AppCard',
  data() {
    return {
      imageName: "No_image_available.svg.png"
    }
  },
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
    getImagePath: function(imgPath){
      return new URL(imgPath, import.meta.url).href;
    }
  },
  computed : {
    imageUrl(){
      {
        const imageSize = 'w342'
        const baseUrl = 'https://image.tmdb.org/t/p/'
        return baseUrl+imageSize+this.card.poster_path;
      }
    }
  }
}

</script>


<template>

  <div class="col-3">
    <div class="mb-card my-2">

      <div class="front-card">
        <div v-if="(card.poster_path === null)" class="no-img-container d-flex align-items-center">
          <img  :src="getImagePath(`../assets/img/${imageName}`)" alt="{{card.title}}">
        </div>
        <img v-else :src="imageUrl" alt="{{card.title}}">
      </div>

      <div class="back-card hide">
        <div class="title">
          <span>Title:&ensp;</span>
          <span>{{card.title || card.name}}</span>
        </div>
        <div class="originaltitle">
          <span>Original Title:&ensp;</span>
          <span>{{card.original_title || card.original_name}}</span>
        </div>
        <div class="language d-flex justify-content-start">
          <span>Language:&ensp;</span>
          <i class="fi fi-gb" v-if="card.original_language ==='en'"></i>
          <i class="fi fi-it" v-else-if="card.original_language ==='it'"></i>
          <i class="fi fi-fr" v-else-if="card.original_language ==='fr'"></i>
          <i class="fi fi-jp" v-else></i>
        </div>
        <div class="rating d-flex justify-content-start">
          <span>Rating:</span>
          <ul class="d-flex">
            <li v-for="star in getStarsRating(card.vote_average)" :key="star"><i class="fa-solid fa-star"></i></li>
            <li v-for="star in getStarsMissing(card.vote_average)" :key="star"><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <div class="overview">
          <span>Overview:&ensp;</span>
          <span>{{card.overview}}</span>
        </div>
         
      </div>

    </div>
  </div>
    
</template>


<style lang="scss" scoped>
.hide {
  display: none;
}
.show {
  display: block;
}
.col-3 {
  height: 459px;
  .mb-card {
    height: 100%;
    color: black;
    background-color: white;
    .front-card {
      height: 100%;
      .no-img-container{
        height: 100%;
        img {
          
        }
      }
    }
  
    .back-card {
      height: 100%;
      overflow-y: scroll;
      padding: 1rem;
      span:first-child {
        font-weight: bold;
      }
  
      ul {
        list-style: none;
      }
    }
  }
  .mb-card:hover .front-card {
    display: none;
  }
  .mb-card:hover .back-card {
    display: block;
  }
}
</style>