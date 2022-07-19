import React, { Component } from 'react'
import Header from './components/Page/Header'
import Hero from './components/Homepage/Hero'
import SearchContainer from './components/Search/SearchContainer'

export default class SearchPage extends Component {
  render() {
    return (
      <div className="App mb-96">
        <header className="App-header">
          <Header />
        </header>
        <section className="container mx-auto">
          <Hero title="Search" subTitle="Search the open library" />
        </section>
        <main className="container mx-auto">
              <SearchContainer />
        </main>
      </div>
    )
  }
}
