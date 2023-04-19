<template>
    <div class="col card-container mt-3 p-0" v-for="card in store.movieList">
        <div class="text-center">
            <!-- <img class="img-fluid" :src="store.Url_img" alt=""> -->
            <p>{{ card.title }}</p>
            <p>{{ card.original_title }}</p>
            <p>{{ card.original_language }}</p>
            <p>{{ card.vote_average }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: 'CardFilm',
    data() {
        return {
            store,
            base_Url: store.Url_img,
            url: null,
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