import React, { Component } from 'react';
import Book from '../../components/Books/Book';


class DisplayReadingList extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
        this.fetchBook()
    }

    fetchBook = () => {

        fetch(`https://openlibrary.org/works/${this.props.bookID}.json`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response
                })
            },()=>{console.log(this.state.data);})
            .catch(error => { console.log(error) })

    }

    render() {
        return (
            <div>
                <Book data={this.state.data} id={this.props.id} />
            </div>
        );
    }
}

export default DisplayReadingList;