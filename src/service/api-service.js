export default class ApiService {

    _apiBase = 'http://localhost:5000/movies';
  
    async getResource(url) {
        const res = await fetch (`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}.`)
        }
        console.log(res);
        return await res.json();
    };

    async postResource(url, body) {
        const res = await fetch (`${this._apiBase}${url}`, {
            method: 'POST',
            body: body
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}.`)
        }
        console.log(res);
        return await res.json();
    };
    
    async getManyMovies(sortBy, year) {
        const data = {  'count' : 8,
                        'year' : year,
                        'sortBy' : sortBy
                        };

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
  
    getMovie(id) {
        return this.getResource(`/id/${id}`);
    }
  
    getGenre(id) {
        return this.getResource(`/genre/${id}`);
    }

}