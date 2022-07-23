import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Authors from '../Books/Authors';

export default class DisplaySingleBook extends Component {
  
  constructor(props) {
    super()
    this.state = {}
  }

  handleAuthor = (data) => {
    this.setState({
      ...this.state,
      author: data
    })
  }

  displayImage = () => {
    if (this.props.data.covers[0] < 2) {
      return `https://covers.openlibrary.org/b/id/${this.props.data.covers[1]}-L.jpg`
    } else {
      return `https://covers.openlibrary.org/b/id/${this.props.data.covers[0]}-L.jpg`
    }
  }

  render() {
    return (
      <Link to={`../books/${this.props.data.key.substring(7)}`} className="group">
        <div className="displaySubject" >
          <div className='flex justify-center items-center overflow-hidden object-cover h-60 lg:h-60 mb-3 bg-stone-100 px-8 py-8'>
            <img className='rounded block max-h-full max-w-full group-hover:scale-105 transition duration-100 ease-out hover:ease-in' src={this.displayImage()} alt={this.props.title}></img>
          </div>
          <h3 className='text-slate-900 font-bold text-lg hover-underline'>{this.props.data.title}</h3>
          <h4 className='text-slate-600 hover-underline'><Authors handleAuthor={this.handleAuthor} authors={this.props.data.authors} /></h4>
        </div>
      </Link>
    )
  }
}

