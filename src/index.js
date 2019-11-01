import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiService from "./service/api-service";
import Card from './components/card';
import Nav from './components/nav';
import Select from './components/select';

class App extends Component {

    constructor () {
        super();
        this.updateMovies();
    }

    state = {
        elements : null,
        firstHalf : null,
        secondHalf : null,
        year: null
    };

    apiService = new ApiService();

    updateData = (value) => {
        console.log(value);
        this.updateMovies(value);
    }

    //genre_id, year, 
    updateMovies = (sortBy, year) => {
        this.apiService
        .getManyMovies(sortBy, year)
        .then((movies) => {
            console.log(movies);
            const elements = movies.map((movie) => {
                return (
                    <Card key={movie.id} data={movie}/>
                );
              });
              this.setState({
                elements: elements,
                firstHalf: elements.slice(0, 4),
                secondHalf: elements.slice(4, 8)
              })
        });
    };

    
    render() {
        return (
            <div className = "container">
            <Nav/>
            <div className = "inputs">
                <Select updateData={this.updateData} />
            </div>
                <div className = "section">
                    <header className = "App-header">
                            <div className = "row">
                                {this.state.firstHalf}
                            </div>
                            <div className = "row">
                                {this.state.secondHalf}
                            </div>
                    </header>
                </div>
            </div>
        );
    }   
}

ReactDOM.render(<App />, document.getElementById('root'));
