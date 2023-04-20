<template>
    <div class="col card-container mt-3 p-0">
        
        <div class="text-center">
            <img class="img-fluid" :src="store.Url_img + image" alt="">
            <p>{{ name }}</p>
            <p>{{ original_name }}</p>
            <p>{{ original_language }}</p>
            <p>{{ vote_average }}</p>
        </div>
    </div>
</template>

<script>
    import { store } from '../assets/data/store';
    export default {
        name: 'CardTvSeries',
        props: ['title', 'original_title','language', 'vote', 'image'],
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