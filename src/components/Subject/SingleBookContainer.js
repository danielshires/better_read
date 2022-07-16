import React, { Component } from 'react';
import DisplaySingleBook from './DisplaySingleBook';

class SingleBookContainer extends Component {

    constructor(props) {
        super()
        this.state = {
            id: props.id,
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
            response: response
        })
    }


    render() {
        return (
            <>
            {/* {this.checkIfDataPresent()} */}
                <DisplaySingleBook data={this.state.response} />
            </>

        );
    }
}

export default SingleBookContainer;
