<template>
    <div class="col p-0 card-container " >
        <div class="text-center item h-100">
            <div class="" v-if="image">
                <img class="img-fluid" :src="store.Url_img + image" alt="">
            </div>
            <div v-else class="w-100 h-100">
                <img id="no-img" class="img-fluid" src="../assets/images/no_image.webp" alt="">
            </div>
            
            <div class="overlay overflow-auto">
                <p class="mt-5">{{ title }}</p>
                <p>{{ overview }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: 'CardFilm',
    props: ['title', 'original_title','language', 'vote', 'image', 'overview'],
    data() {
        return {
            store
        }
    },
    mounted() {
        
    }

}
</script>

<style lang="scss" scoped>
.card-container {
    height: 300px;
    width: 200px;
    img {
        width: 100%;
        height: 100%;
    }
    
}

.item {
    position: relative;
    transition: all 1s;
    &:hover {
        scale: 1.2;
    z-index: 2;
    }
}
.overlay {
  position:absolute;
  top:0;left:0;right:0;bottom:0;
  background-color: rgba(0, 0, 0, 0.766);
  border: 1px solid white;
  opacity: 0;
  font-size: .8rem;
  cursor: pointer;
  transition: all 1s;
  
}
.overlay:hover {
  opacity: 1;
  
}

::-webkit-scrollbar-track {
    background: #00000000;
  }

#no-img {
    object-fit: cover;
}


</style>