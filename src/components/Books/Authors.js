import React, { Component } from 'react'
import AuthorName from './AuthorName'

export default class Authors extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        const authorURL = this.props.authors[0].author.key
        const searchURL = `http://openlibrary.org${authorURL}.json`
        fetch(searchURL)
            // Return JSON
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response);
            })
            // Set initial array
            .then(response => {
                this.setInitialState(response)
                return response
            }, networkError => {
                console.log(networkError.message)
            })
    }

    setInitialState = (response) => {
        this.setState({
            ...this.state,
            author: response.name
        }, () => {
            this.props.handleAuthor(this.state.author)
        })
    }

    render() {
        return (
            <AuthorName authorName={this.state.author}/>
        )
    }
}
