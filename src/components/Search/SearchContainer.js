import React, { Component } from 'react';
import SearchForm from './SearchForm';

class SearchContainer extends Component {

    constructor() {
        super()
        this.state = {
            searchInput: '',
            searchResponse: [],
            searchStatus: false,
            pageLoaded: true,
        }
    }

    handlSubmit = (event) => {
        event.preventDefault()
        this.fecthResults(this.state.searchInput)
    }

    handleInput = event => {
        this.setState({
            searchInput: event.target.value
        })
    }

    fecthResults = value => {
        const splitWords = value.split(" ")
        const searchTerm = splitWords.join("+")
        const url = `http://openlibrary.org/search.json?q=${searchTerm}`

        this.setState((prevState) => ({
            pageLoaded: false
        }))
        
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response);
            })
            .then(response => {
                this.setState({
                    searchResponse: response.docs,
                    searchStatus: true,
                    pageLoaded: true
                }, () => { console.log(this.state) })
            })
    }

    render() {
        return (
            <SearchForm input={this.handleInput} submit={this.handlSubmit} value={this.state.searchInput} searchResults={this.state.searchResponse} searchStatus={this.state.searchStatus} />
        );
    }
}

export default SearchContainer;
