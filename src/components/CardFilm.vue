<template>
    <div class="col card-container mt-3 p-0" >
        <div class="text-center">
            <img class="img-fluid" :src="store.Url_img + image" alt="">
            <p>{{ title }}</p>
            <p>{{ original_title }}</p>
            <p>{{ original_language }}</p>
            <p>{{ vote_average }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: 'CardFilm',
    props: ['title', 'original_title','language', 'vote', 'image'],
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
    background-color: aqua;
    height: 250px;
}
</style>