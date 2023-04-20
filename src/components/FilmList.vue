<template>
    <div class="row container pt-3">
        <h3>Film</h3>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardFilm v-for="card in store.movieList" :title="card.title" :original_title="card.original_title" :language="card.original_language" :vote="card.vote_average" :image="card.poster_path"/>
    </div>
    <div class="row container pt-3">
        <h3>Serie Tv</h3>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardTvSeries v-for="card in store.tvSeriesList" :title="card.name" :original_title="card.original_name" :language="card.original_language" :vote="card.vote_average" :image="card.poster_path"/>
    </div>

</template>

<script>
    import CardFilm from './CardFilm.vue';
    import CardTvSeries from './CardTvSeries.vue';
    import axios from 'axios';
    import { store } from '../assets/data/store';
    export default {
        name: 'FilmList',
        components: {CardFilm, CardTvSeries},
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>