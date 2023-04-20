<template>
    <div class="col mt-3 mb-3 p-0 card-container " >
        <div class="text-center item">
            <img class="img-fluid" :src="store.Url_img + image" alt="">
            <div class="overlay overflow-auto">
                <p>{{ title }}</p>
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
}
.overlay {
  position:absolute;
  top:0;left:0;right:0;bottom:0;
  background-color: rgba(0, 0, 0, 0.766);
  opacity: 0;
  font-size: .8rem;
}
.overlay:hover {
  opacity: 1;
}

::-webkit-scrollbar-track {
    background: #00000000;
  }


</style>