export default class ApiService {

    _apiBase = 'http://localhost:5000/movies';

    getResource = async (url) => {
        const res = await fetch (`${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}.`)
        }
        console.log(res);
        return await res.json();
    };
    
    getManyMovies = async (sortBy, year, genre) => {
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
  
    getMovie = async (id) => {
        return this.getResource(`${this._apiBase}/id/${id}`);
    }
  
    getGenre= async (id) => {
        return this.getResource(`/genre/${id}`);
    }

}