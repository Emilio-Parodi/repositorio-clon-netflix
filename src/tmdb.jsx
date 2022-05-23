const apiKey = '00ae41d10bd1905c55e69a306361263a';
const apiBase = 'https://api.themoviedb.org/3';

/*
- originales de Netflix
- recomendados
- mejor valorados
- acción
- comedia 
- terror
- romance
documentales
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${apiBase}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originales de Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'toprated',
                title: 'Mejores Valorados',
                items: await basicFetch(`/movie/top_rated?language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'action',
                title: 'Acción',
                items: await basicFetch(`/discover/movie?with_genres=28&language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'Romance',
                title: 'Romantica',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=es-ES&api_key=${apiKey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentales',
                items: await basicFetch(`/discover/movie?with_genres=99&language=es-ES&api_key=${apiKey}`)
            },
        ];
    },
    
    getMovieInfo: async (movieId, type) => {
        let info = {};
        
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=es-ES&api_key=${apiKey}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=es-ES&api_key=${apiKey}`);
                    break;
                default:
                    info = null;
                break;    
            }
        }
        return info;
    }
}   