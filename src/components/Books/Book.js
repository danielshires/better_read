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

    return checkID === undefined ? this.addBookToReadingList(this.props.id) : false

  }

  handleAuthor = (data) => {
    this.setState({
      ...this.state,
      author: data
    })
  }

  displayDescription = () => {

    if (typeof this.props.data.description === 'string') {
      return <p className='p'>{this.props.data.description}</p>
    } else if (typeof this.props.data.description === 'object') {
      return <p className='p'>{this.props.data.description.value}</p>
    } else {
      return <p className='p'>No description found</p>
    }

  }

  displayButton = () => {
    const checkID = this.props.checkReadingList.find(entry => entry.id === this.props.id)

    if (checkID === undefined) {
      return <ReadingListButton submitData={this.submitData} buttonActive={true} />
    } 

    return <ReadingListButton submitData={this.submitData} buttonActive={false} />
  }

  displayBook = () => {
    if (Object.keys(this.props.data).length > 0) {
      return <div className="container mx-auto mt-10">
        <div className='back flex gap-2'>
          <div>
            <Link className="font-bold hover:underline hover:underline-offset-2" to='/'>Back</Link></div><div>/</div><div>{this.props.data.title}</div>
        </div>
        <div className="grid grid-cols-12 md:col-span-4 lg:col-span-2 gap-12 mt-10 md:mt-10 lg:mt-20">
          <div className='col-span-8 md:col-span-4 row-span-1 flex justify-center items-center overflow-hidden object-cover w-full bg-stone-100 px-8 py-8 max-h-1/2'>
            <img className="rounded block h-3/4 max-w-full" src={`https://covers.openlibrary.org/b/id/${this.props.data.covers[0]}-L.jpg`} alt={this.props.data.title}></img>
          </div>
          <div className='col-span-12 md:col-span-8 lg:col-span-6 row-span-3'>
            <div className="mb-2">
              <h1 className='h1'>{this.props.data.title}</h1>
              <h2 className="h2"><Authors handleAuthor={this.handleAuthor} authors={this.props.data.authors} /></h2>
            </div>
            <div className='mt-8 mb-8'>
              {this.displayButton()}
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
