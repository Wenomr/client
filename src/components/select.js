

import React, { Component } from 'react';
import '../index.css';

export default class Select extends Component {

    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {

        const {updateData = () => {}} = this.props;

        this.setState({value: event.target.value});

        updateData(event.target.value);
    }


    state = {
        value : "popularity.desc"
    };

    render() {

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