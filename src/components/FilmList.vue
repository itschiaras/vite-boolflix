<template>
    <div class="row container pt-3">
        <h3>Film</h3>
    </div>
    <div v-if="store.movieList.length === 0" class="ps-3">
      <p>Nessun film trovato</p> 
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 flex-nowrap film-container align-items-center ps-3">
        <CardComponent v-for="card in store.movieList" :title="card.title" :original_title="card.original_title" :language="card.original_language" :vote="card.vote_average" :image="card.poster_path" :overview="card.overview"/>
    </div>
    <div class="row container pt-4">
        <h3>Serie Tv</h3>
    </div>
    <div v-if="store.tvSeriesList.length === 0" class="ps-3">
      <p>Nessuna serie Tv trovata</p> 
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 flex-nowrap film-container mb-3 align-items-center ps-3">
        <CardComponent v-for="card in store.tvSeriesList" :title="card.name" :original_title="card.original_name" :language="card.original_language" :vote="card.vote_average" :image="card.poster_path" :overview="card.overview"/>
    </div>

    

</template>

<script>
    import CardComponent from './CardComponent.vue';
    import axios from 'axios';
    import { store } from '../assets/data/store';
    export default {
        name: 'FilmList',
        components: {CardComponent},
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
.film-container {
    overflow-x: auto;
    overflow-y: hidden;
    height: 390px;
}

::-webkit-scrollbar {
    height: 10px;
}

::-webkit-scrollbar-track {
    background: #00000000;
  }
</style>