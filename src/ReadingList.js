import React, { Component } from 'react'
import Header from './components/Page/Header'
import DisplayReadingList from './components/ReadingList/DisplayReadingList'
import DisplaySingleBook from './components/Subject/DisplaySingleBook'
import SingleBookContainer from './components/Subject/SingleBookContainer'
import Hero from './components/Homepage/Hero'


export default class ReadingList extends Component {

  constructor() {
    super()
    this.state = {
      readingList: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:3000/readingList')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          readingList: response
        })
        return response
      })
      .catch(error => { console.log(error) })
  }

  renderReadingList = () => {
    if (Object.keys(this.state.readingList).length > 0){
      return this.state.readingList.map(book => {
        console.log(book)
        return <SingleBookContainer key={book.bookID} id={book.id}/>
      })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section className="container mx-auto">
          <Hero title="My Library" subTitle="View your reading list, past reads and wish-lists"/>
        </section>
        <main className="container mx-auto flex flex-col gap-10 lg:gap-20">
        <div className='flex flex-col gap-4'>
                <div className="text-xl font-bold mb-4">Reading List</div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-16'>
                {this.renderReadingList()}
                </div>
            </div>
         
        </main>
      </div>
    )
  }
}
