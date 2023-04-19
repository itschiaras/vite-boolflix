<template>
  <HeaderComponent @search-change="getMovieList" @search-change-tv="getTvSeriesList"/>
  <main class="container mt-5 bg-light">
    <FilmList/>
  </main>
  
</template>

<script>
import { store } from './assets/data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import FilmList from './components/FilmList.vue';
export default {
  name: 'App',
  components: { HeaderComponent, FilmList },
  data() {
    return {
      store
    }
  },
  methods: {
    getMostPopular() {
      const url = store.baseUrl + store.endPointPopularMovie;
      let options = {}
      let params = {}
      for (let key in store.search) {

        if (store.search[key]) {
          params[key] = store.search[key]

        }
      }

      if (Object.keys(params).length > 0) {
        options.params = params;
        console.log(options)
      }
      axios.get(url, options).then((res) => {
        store.movieList = res.data.results
        console.log(store.movieList)
      })
    },
    getMovieList() {
      const movieUrl = store.baseUrl + store.endPointMovie
      let options = {}
      let params = {}
      for (let key in store.search) {

        if (store.search[key]) {
          params[key] = store.search[key]

        }
      }

      if (Object.keys(params).length > 0) {
        options.params = params;
        console.log(options)
      }
      axios.get(movieUrl, options).then((res) => {
        store.movieList = res.data.results
        console.log(store.movieList)
      })
    },
    getTvSeriesList() {
      const tvSeriesUrl = store.baseUrl + store.endPointTvShow
      let options = {}
      let params = {}
      for (let key in store.search) {

        if (store.search[key]) {
          params[key] = store.search[key]

        }
      }

      if (Object.keys(params).length > 0) {
        options.params = params;
        console.log(options)
      }
      axios.get(tvSeriesUrl, options).then((res) => {
        store.tvSeriesList = res.data.results
        console.log(store.tvSeriesList)
      })
    }
  },
  mounted() {
    this.getMostPopular();
  }
}
</script>

<style lang="scss" scoped></style>