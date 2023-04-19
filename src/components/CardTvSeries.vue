<template>
    <div class="col card-container mt-3 p-0" v-for="card in store.tvSeriesList">
        
        <div class="text-center">
            <!-- <img class="img-fluid" :src="store.Url_img" alt=""> -->
            <p>{{ card.name }}</p>
            <p>{{ card.original_name }}</p>
            <p>{{ card.original_language }}</p>
            <p>{{ card.vote_average }}</p>
        </div>
    </div>
</template>

<script>
    import { store } from '../assets/data/store';
    export default {
        name: 'CardTvSeries',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
.card-container {
    background-color: pink;
    height: 250px;
}
</style>