

import React, { Component } from 'react';
import '../index.css';

export default class Select extends Component {

    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
        //this.updateMovie(250);
        //this.updateMovie();
    }
    
    handleChange(event) {
        //console.log(event.target.value);

        const {updateData = () => {}} = this.props;

        this.setState({value: event.target.value});

        updateData(event.target.value);
    }


    state = {
        value : "popularity.desc"
    };

    render() {
        //const { rating, title, genres, poster } = this.state;
        //const { id, vote_average, title, genre_titles, poster_path } = this.props.data;

        return (
            <select className="browser-default" 
                    name = "sortBy"
                    onChange={this.handleChange}>
                <option value = "popularity.desc">Popularity</option>
                <option value = "vote_average.desc">Rating</option>
                <option value = "release_date.desc">Release date</option>
            </select>
        );
    }
}