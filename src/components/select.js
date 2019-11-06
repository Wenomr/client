import React, { Component } from 'react';
import '../index.css';

export default class Select extends Component {

    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
    }

    state = {
        sortBy : "popularity.desc",
        year : "",
        genre : ""
    };
    
    handleChange(event) {

        const {updateData = () => {}} = this.props;
        this.setState({sortBy: event.target.value},() => {
            updateData(this.state.sortBy, this.state.year, this.state.genre);
        });
    }

    handleYearChange(event) {

        const {updateData = () => {}} = this.props;
        console.log(event.target.value);
        //this.setState({year: event.target.value});
        this.setState({
            year : event.target.value.replace(/\D/,'')
        }, () => {
            updateData(this.state.sortBy, this.state.year, this.state.genre);
        });
    }

    handleGenreChange(event) {

        const {updateData = () => {}} = this.props;
        console.log(event.target.value);
        //this.setState({year: event.target.value});
        this.setState({
            genre : event.target.value
        }, () => {
            updateData(this.state.sortBy, this.state.year, this.state.genre);
        });
    }

    render() {

        return (
            <div className = "centered">
                <select className="browser-default filter-item" 
                        name = "sortBy"
                        onChange={this.handleChange}>
                    <option value = "popularity.desc">Popularity</option>
                    <option value = "vote_average.desc">Rating</option>
                    <option value = "release_date.desc">Release date</option>
                </select>
                <select 
                        className="browser-default filter-item"
                        name="genre_id"
                        onChange={this.handleGenreChange}>
                        <option value="28">Action</option>
                        <option value="12">Adventure</option>
                        <option value="16">Animation</option>
                        <option value="35">Comedy</option>
                        <option value="80">Crime</option>
                        <option value="99">Documentary</option>
                        <option value="18">Drama</option>
                        <option value="10751">Family</option>
                        <option value="14">Fantasy</option>
                        <option value="36">History</option>
                        <option value="27">Horror</option>
                        <option value="10402">Music</option>
                        <option value="9648">Mystery</option>
                        <option value="10749">Romance</option>
                        <option value="878">Science Fiction</option>
                        <option value="10770">TV Movie</option>
                        <option value="53">Thriller</option>
                        <option value="10752">War</option>
                        <option value="37">Western</option>
                        <option value="">None</option>
                </select>
                <input 
                        className = "input-field year-input filter-item"
                        type = "text"
                        placeholder = "1999"
                        value = {this.state.year} 
                        onChange={this.handleYearChange}>
                </input>
            </div>
        );
    }
}