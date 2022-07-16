import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Authors from './Authors';
import ReadingListButton from './ReadingListButton';

export default class Book extends Component {

  constructor(props) {
    super()
    this.state = {
   
    }
    this.submitData = this.submitData.bind(this)
    this.addBookToReadingList = this.addBookToReadingList.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.title !== prevProps.data.title) {
      this.setState({
        ...this.state,
        title: this.props.data.title,
        image: `https://covers.openlibrary.org/b/id/${this.props.data.covers[0]}-L.jpg`,
        bookID: this.props.id,
      })
    }
  }

  addBookToReadingList = (data) => {
    return this.props.addToList(data)
  }

  submitData = () => {

    const checkID = this.props.checkReadingList.find(entry => entry.bookID === this.props.id)

    return checkID === undefined ? this.addBookToReadingList(this.props.id) : console.log("Already on list")

  }

  handleAuthor = (data) => {
    this.setState({
      ...this.state,
      author: data
    })
  }

  displayDescription = () => {

    if (typeof this.props.data.description === 'string') {
      return this.props.data.description
    } else if (typeof this.props.data.description === 'object') {
      return <p className='p'>{this.props.data.description.value}</p>
    } else {
      return <p className='p'>No description found</p>
    }

  }

  displayBook = () => {
    if (Object.keys(this.props.data).length > 0) {
      return <div className="container mx-auto mt-10">
        <div className='back flex gap-2'>
          <div>
            <Link className="font-bold hover:underline hover:underline-offset-2" to='/'>Back</Link></div><div>/</div><div>Books</div><div>/</div><div>{this.props.data.title}</div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-2 md:mt-6 lg:mt-20">
          <div className='col-span-6 md:col-span-3'>
            <img className="max-w-full h-auto" src={`https://covers.openlibrary.org/b/id/${this.props.data.covers[0]}-L.jpg`} alt={this.props.data.title}></img>
          </div>
          <div className='col-span-12 md:col-span-5 md:col-start-5'>
            <div className="mb-8">
              <h1 className='h1'>{this.props.data.title}</h1>
              <Authors handleAuthor={this.handleAuthor} authors={this.props.data.authors} />
              <ReadingListButton submitData={this.submitData} />
            </div>
            <div>
              {this.displayDescription()}
            </div>
          </div>
        </div>
      </div>
    }
  }

  render() {
    return (
      <>
        {this.displayBook()}
      </>
    )
  }
}
