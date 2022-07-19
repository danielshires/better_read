import React, { Component } from 'react'
import SingleBookContainer from './SingleBookContainer'

export default class DisplaySubject extends Component {

    constructor() {
        super()
        this.state = {
            response: [],
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        const searchURL = `http://openlibrary.org/subjects/${this.props.categoryName}.json?`
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
            response: response.works,
        })
    }

    displaySingleBook = () => {
        return this.state.response.map((entry, index) => {
                return <SingleBookContainer key={entry.key.substring(7)} id={entry.key.substring(7)} data={entry} />
        })
    }

    firstLetterUppercase = () => {
        return this.props.categoryName.charAt(0).toUpperCase() + this.props.categoryName.slice(1)
    }

    render() {
        return (
            <div className='flex flex-col gap-4'>
                <div className="text-2xl font-bold mb-4">{this.firstLetterUppercase()}</div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-16'>
                    {this.displaySingleBook()}
                </div>
            </div>
        )
    }
}
