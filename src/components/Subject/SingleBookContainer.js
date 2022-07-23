import React, { Component } from 'react';
import DisplaySingleBook from './DisplaySingleBook';
import ReadingListBook from '../ReadingList/ReadingListBook';

class SingleBookContainer extends Component {

    constructor(props) {
        super()
        this.state = {
            id: props.id,
            key: props.id,
            loaded: false,
            response: []
        }
        this.fetchBook = this.fetchBook.bind(this)
        this.setInitialState = this.setInitialState.bind(this)
    }

    componentDidMount() {
        this.fetchBook()
    }

    fetchBook = () => {
        fetch(`https://openlibrary.org/works/${this.state.id}.json`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response);
            })
            .then(response => {
                this.setInitialState(response)
            })
            .catch(error => { console.log(error) })
    }

    setInitialState = (response) => {
        this.setState({
            response: response,
            loaded: true,
        })
    }

    render() {
        if (!this.state.loaded) {
            return false;
        }
        return (
            <>
                {this.props.readingList
                    ?
                    <ReadingListBook id={this.state.id} dataBaseKey={this.props.dataBaseKey} data={this.state.response} readingListFirebase={this.props.readingListFirebase} removeFromReadingList={this.props.removeFromReadingList} />
                    :
                    <DisplaySingleBook id={this.state.id} data={this.state.response} readingList={this.props.readingList} />}
            </>

        );
    }
}

export default SingleBookContainer;
