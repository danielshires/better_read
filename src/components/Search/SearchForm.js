import React, { Component } from 'react';
import {
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

export class SearchForm extends Component {

    constructor(props) {
        super()
        this.state = {
            searchActive: props.searchStatus,
            searchResultsClassActive: 'relative',
            searchResultsClassDisabled: 'hidden'
        }
    }

    displayResults = () => {
        return this.props.searchResults.map(entry => {
            console.log(entry)
            return <>
                <Link to={`/books/${entry.key.substring(7)}`}>
                    <div className='flex justify-center items-center overflow-hidden object-cover h-60 lg:h-60 mb-3 bg-stone-100 px-8 py-8'>
                        <img className='rounded block max-h-full max-w-full group-hover:scale-105 transition duration-100 ease-out hover:ease-in' src={this.displayImage(entry)} alt={this.props.title}></img>
                    </div>
                    <h3 className='text-slate-900 font-bold text-lg hover-underline'>{entry.title}</h3>
                    <h4 className='text-slate-600 hover-underline'>{entry.author_name === undefined ? "Unknown" : entry.author_name[0]}</h4>
                </Link>
            </>
        })
    }

    displayImage = (entry) => {
        if(entry.cover_i === undefined){
            return `data:image/png;base64,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`
        }
        return `https://covers.openlibrary.org/b/id/${entry.cover_i}-L.jpg`
    }

    render() {
        return (
            <>
                <form className="flex" onSubmit={event => { this.props.submit(event) }} >
                    <input
                        className=" w-96 h-12 pl-4 pr-10 text-base bg-white border border-slate-200 "
                        id="search"
                        type="search"
                        placeholder="Search website..."
                        value={this.props.value}
                        onChange={event => this.props.input(event)}
                    />
                    <button onClick={event => { this.props.submit(event) }}
                        className="w-12 flex justify-center items-center p-2 text-gray-600 border border-slate-200 hover:text-gray-700 bg-slate-100"
                        type="button"
                        aria-label="Submit Search"
                    >
                        <Search />
                    </button>
                </form>
                <div className="grid grid-cols-6 gap-8 mt-10">
                    {this.displayResults()}
                </div>

            </>
        )
    }
}

export default SearchForm