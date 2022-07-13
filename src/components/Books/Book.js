import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Authors from './Authors';
import Description from './Description';

export default class Book extends Component {

  constructor() {
    super()
    this.state = {}
  }

  displayBook = () => {
    if (Object.keys(this.props.data).length > 0) {
      return <div className="container mx-auto mt-10">
        <div className='back flex gap-2'>
          <div><Link className="font-bold" to='/'>Back</Link></div><div>/</div><div>Books</div><div>/</div><div>{this.props.data.title}</div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-2 md:mt-6 lg:mt-20">
          <div className='col-span-6 md:col-span-3'>
            <img src={`https://covers.openlibrary.org/b/id/${this.props.data.covers[0]}-L.jpg`} alt={this.props.data.title}></img>
          </div>
          <div className='col-span-12 md:col-span-5 md:col-start-5'>
            <div className="mb-8">
              <h1 className='h1'>{this.props.data.title}</h1>
              <p className='p'><Authors authors={this.props.data.authors} /></p>
              <button className="btn-primary my-2">Add to Reading List</button>
            </div>
            <div>
              <p className='p'><Description description={this.props.data.description} /></p>
            </div>
          </div>
        </div>
      </div>
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <>
        {this.displayBook()}
      </>
    )
  }
}
