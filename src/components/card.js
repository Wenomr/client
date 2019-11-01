import React, { Component } from 'react';
import ApiService from "../service/api-service";
import '../index.css';

export default class Card extends Component {
    
    state = {
        id : null,
        rating : null,
        title : null,
        genres : null,
        poster : null
    };

    apiService = new ApiService();


    render() {

        const { vote_average, title, genre_titles, poster_path } = this.props.data;
        return (
            <div className="col s1 m3">
                <div className="card">
                    <div className="card-image">
                        <img className="card-img" src = {"https://image.tmdb.org/t/p/w400"+ poster_path} alt = ""/>
                    </div>
                    <div className="card-content">
                        <p className = "small">{ vote_average }/10</p>
                        <p className = "title">{ title }</p>
                        <p className = "small">{ genre_titles.join(" | ") }</p>
                    </div>
                </div>
            </div>
        );
    }
}

