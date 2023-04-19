<template>
    <div class="row container pt-3">
        <h3>Film</h3>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardFilm/>
    </div>
    <div class="row container pt-3">
        <h3>Serie Tv</h3>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardTvSeries/>
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