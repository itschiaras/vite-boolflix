<template>
  <HeaderComponent />
</template>

<script>
import { store } from './assets/data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: { HeaderComponent },
  data() {
    return {
      store
    }
  },
  methods: {
    getMoviesTvSeriesInfo() {
      const url = store.baseUrl + store.endPointMovie;
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
        store.filmTvSeriesList = res.data
        console.log(store.filmTvSeriesList)
      })
    }
  },
  mounted() {
    this.getMoviesTvSeriesInfo();
  }
}
</script>

<style lang="scss" scoped></style>