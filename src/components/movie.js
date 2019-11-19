import React, { Component } from 'react';
import ApiService from "../service/api-service";

export default class Movie extends Component {

    state = {
        id : null
    };

    apiService = new ApiService();

    componentDidMount () {
        const { id } = this.props.match.params
        this.setState({id : id}, () => {
            this.apiService
            .getMovieEx(this.state.id)
            .then((movie) => {
                this.setState({
                    id : movie.id,
                    //genres : movie.genre_titles.join(" | "),
                    title : movie.title,
                    overview : movie.overview,
                    vote_average : movie.vote_average,
                    release_date : movie.release_date.replace(/-/g, '.'),
                    poster_path : `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                })
            });
        });
    }

    render() {

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
                        <p className = "base-line">
                            <i className="material-icons">star_half</i><strong>{ this.state.vote_average }/10</strong>  
                        </p>
                        <p> { this.state.release_date } </p>
                        {/* <p className = "small"> { this.state.genres } </p> */}
                    </div>
                </div>
            </div> 
        );
    }
}