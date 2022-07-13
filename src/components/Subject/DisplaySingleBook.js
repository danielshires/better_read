import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DisplaySingleBook extends Component {
  constructor() {
    super()
    this.state = {}
  }

  displayBook = () => {
    const worksID = this.props.data.key.substring(7)
    return <div className="displaySubject" >
      <div className='rounded-lg flex justify-center items-center overflow-hidden object-cover h-60 md:80 lg:h-96 mb-3'>
        <img className='h-full w-full object-contain md:object-cover' src={`https://covers.openlibrary.org/b/id/${this.props.data.cover_id}-L.jpg`} alt={this.props.data.title}></img>
      </div>
      <h3 className='text-slate-900 font-bold text-lg'>{this.props.data.title}</h3>
      {/* Component that just displays Authors */}
      {/* Pass the authors */}
      <h4 className='text-slate-600'>{this.props.data.authors[0].name}</h4>
      <Link to={`books/${worksID}`}>View</Link>
    </div>
  }
  render() {
    return (
      <>{this.displayBook()}</>
    )
  }
}
