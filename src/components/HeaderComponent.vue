<template>
    <header class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start mb-3">
                    <img src="../assets/images/netflix-logo-drawing-png-19.png" alt="Metflix Logo">
                </div>

                <div class="col-12 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-end">
                    <form @submit.prevent="setSearch">
                        <input class="me-2" type="text" placeholder="Cerca titolo..." v-model.trim="store.search.query">
                        <button type="submit">Cerca</button>
                    </form>
                </div>
            </div>

        </div>

    </header>
</template>

<script>
 import { store } from '../assets/data/store';
import axios from 'axios';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    },
    methods: {
        setSearch() {
            this.$emit('searchChange')
            this.$emit('searchChangeTv')
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color: transparent;

    img {
        max-width: 200px;
    }

    button {
        background-color: #e9292c;
        color: white;
        border-radius: 5px;
        border: 0;
        padding: .3rem .8rem;
    }

    input {
        border-radius: 5px;
    }
}
</style>