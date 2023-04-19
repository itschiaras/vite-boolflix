import {reactive} from 'vue';

export const store = reactive({
    filmTvSeriesList: [],
    baseUrl: 'https://api.themoviedb.org/3',
    Url_img: 'https://image.tmdb.org/t/p/w300',
    endPointPopularMovie: '/movie/popular',
    endPointMovie: '/search/movie',
    endPointTvShow: '',
    search: {
        query: '',
        api_key: 'fc211de88f7c6b3727074abffafbf059',
        
    }
})