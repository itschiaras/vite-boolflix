import {reactive} from 'vue';

export const store = reactive({
    movieList: [],
    tvSeriesList: [],
    baseUrl: 'https://api.themoviedb.org/3',
    Url_img: 'https://image.tmdb.org/t/p/w342',
    endPointPopularMovie: '/movie/popular',
    endPointPopularTvShow: '/tv/top_rated',
    endPointMovie: '/search/movie',
    endPointTvShow: '/search/tv',
    search: {
        query: '',
        api_key: 'fc211de88f7c6b3727074abffafbf059',
        language: 'IT',
        region: 'it'
    }
})