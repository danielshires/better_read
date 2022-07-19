import React, { Component } from 'react'
import Header from './components/Page/Header'
import SingleBookContainer from './components/Subject/SingleBookContainer'
import Hero from './components/Homepage/Hero'
import Emoji from 'a11y-react-emoji'

const url = 'http://localhost:3000/readingList'

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
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          readingList: response
        })
        return response
      })
      .catch(error => { console.log(error) })
  }

  removeFromReadingList = (data) => {

    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    }

    fetch(`${url}/${data}`, config)
      .then(response => {
        if (response.ok) {
          this.fetchData()
          return Promise.resolve(response)
        }
        return Promise.reject(response);
      })
  }

  renderReadingList = () => {
    if (Object.keys(this.state.readingList).length > 0) {
      return this.state.readingList.map(book => {
        return <SingleBookContainer key={book.key} id={book.id} readingList={true} removeFromReadingList={this.removeFromReadingList}/>
      })
    } else {
      return <div>Nothing in your reading list  <Emoji symbol="😔" label="Pensive Face" /></div>
    }
  }

  render() {
    return (
      <div className="App mb-96">
        <header className="App-header">
          <Header />
        </header>
        <section className="container mx-auto">
          <Hero title="My Library" subTitle="View your reading list, past reads and wish-lists" />
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
