export default class ApiService {

    api_line = '?api_key=8de2555c838007ddf3be91ec80ff332d';

    _apiBase = 'http://localhost:5000/movies';

    getResourceIN = async (url) => {
        const res = await fetch (`${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}.`)
        }
        console.log(res);
        return await res.json();
    };
    
    getManyMoviesIN = async (sortBy, year, genre) => {
        const data = {  'count' : 8,
                        'year' : year,
                        'sortBy' : sortBy,
                        'genre_id' : genre
                        };

        console.log(data);

        const res = await fetch (`${this._apiBase}/`, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}.`)
        }
        return await res.json();
        
    }
  
    getMovieIN = async (id) => {
        // let url = `https://api.themoviedb.org/3/movie/${id}${api_line}&language=en-US`;
        return this.getResource(`${this._apiBase}/id/${id}`);
    }

    
    getManyMoviesEx = async (sortBy, year, genre) => {

        const sort = ["popularity.desc", "release_date.desc", "vote_average.desc"]; // список доступных сортировок.
        sort.includes(sortBy) ? sortBy += "" : sortBy = "popularity.desc";
        let sort_line = `&sort_by=${sortBy}`;

        let genre_line = ``;
        genre_line = `&with_genres=${genre}`;
        
        let year_line;
        if (parseInt(year) < 2020 && parseInt(year) > 1922) {
            year = parseInt(year);
            year_line = `&primary_release_year=${year}`;
        } else {
            year = false;
            year_line = ``;
        }

        let url = `https://api.themoviedb.org/3/discover/movie${this.api_line}&language=en-US&vote_count.gte=900${sort_line}${genre_line}${year_line}`;

        const res = await fetch (`${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}.`)
        }
        let result = await res.json();
        console.log(result.results);
        return result.results;

    }

    getMovieEx = async (id) => {
        let url = `https://api.themoviedb.org/3/movie/${id}${this.api_line}&language=en-US`;

        const res = await fetch (`${url}`);
        console.log(url);
        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}.`)
        }

        let result = await res.json();
        console.log(result);
        return result;
    }

}