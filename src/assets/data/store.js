import {reactive} from 'vue';

export const store = reactive({
    filmTvSeriesList: [],
    baseUrl: 'https://api.themoviedb.org/3',
    endPointMovie: '/movie/popular',
    endPointTvShow: '',
    search: {
        query: '',
        api_key: 'fc211de88f7c6b3727074abffafbf059'
    }
})