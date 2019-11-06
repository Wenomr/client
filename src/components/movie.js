import React, { Component } from 'react';
import ApiService from "../service/api-service";

export default class Movie extends Component {

    constructor () {
        super();
        console.log("HERE ARE PROPS");
    }

    state = {
        id : null
    };

    apiService = new ApiService();

    componentDidMount () {
        const { id } = this.props.match.params
        this.setState({id : id});
        console.log(id);
    }
    
    updateMovie () {
        if (this.state.id) {
            console.log(this.props);
            this.apiService
            .getMovie(this.state.id)
            .then((movie) => {
                console.log(movie);
                this.setState({
                    id : movie.id,
                    genres : movie.genre_titles.join(" | "),
                    title : movie.title,
                    overview : movie.overview,
                    vote_average : movie.vote_average,
                    release_date : movie.release_date,
                    poster_path : `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                })
            });
        }
    };

    render() {

        this.updateMovie();

        return (
            <div className = "container">

                <div className="col s12 m8 offset-m1 xl7 offset-xl1 center-on-small-only little-margin">
                    <h2 className="light">Details</h2>
                </div>

                <div className="movie-container card-panel">
                    
                    <img src = {`${this.state.poster_path}`} alt = ""/>
                    
                    <div className = "info-container">
                        <h3 className = "light"> { this.state.title } </h3>
                        <p> { this.state.overview } </p>
                        <p> { this.state.vote_average }/10 </p>
                        <p> { this.state.release_date } </p>
                        <p> { this.state.genres } </p>
                    </div>
                </div>
            </div> 
        );
    }
}