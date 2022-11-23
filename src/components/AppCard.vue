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

  <div class="col-3 my-2">
    <div class="mb-card h-100 p-3" >

      <div class="front-card h-100 ">
        <div v-if="(card.poster_path === null)" class="no-img-container d-flex align-items-center">
          <img  :src="getImagePath(`../assets/img/${imageName}`)" alt="{{card.title}}">
        </div>
        <img v-else :src="imageUrl" alt="{{card.title}}">
      </div>

      <div class="back-card">
        <div class="text-content h-100">
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
          <div v-if="card.overview !==''" class="overview pb-3">
            <span>Overview:&ensp;</span>
            <span>{{card.overview}}</span>
          </div>
          <div v-else>
            <span>No overview available on this title</span>
          </div>
        </div>
      </div>

    </div>
  </div>
    
</template>


<style lang="scss" scoped>
.col-3 {
  height: 459px;
  position: relative;
}
.mb-card {
  width: 100%;
  border: 2px solid white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #000;
}
.front-card {
  width: 100%;
  overflow: hidden;
  img {
    transition: 1s;
  }
}
.mb-card:hover {
    cursor: pointer;
}
.mb-card:hover .front-card img {
    opacity: .5;
    transform: translateX(100%);/*100%*/
}
.no-img-container{
    height: 100%;
}
.back-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;/*100%*/
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.25);
  color: white;
  transition: .5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
  overflow-y: scroll;
  padding: 1rem;
}
.mb-card:hover .back-card {
  transform: perspective(2000px) rotateY(0deg);
}
.text-content {
  padding: 20px;
  width: 90%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
span:first-child {
  font-weight: bold;
}
ul {
  list-style: none;
}

</style>