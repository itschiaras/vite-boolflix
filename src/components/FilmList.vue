<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardFilm/>
    </div>
</template>

<script>
    import CardFilm from './CardFilm.vue';
    import axios from 'axios';
    import { store } from '../assets/data/store';
    export default {
        name: 'FilmList',
        components: {CardFilm},
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>