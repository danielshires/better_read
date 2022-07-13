import React, { Component } from 'react'
import Header from './components/Page/Header'
import DisplayBooks from './components/Books/DisplayBooks'

export default class ReadingList extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section className="container mx-auto">
          <DisplayBooks />
        </section>
        <main className="container mx-auto flex flex-col gap-10 lg:gap-20">
          {/* <SubjectRow /> */}
        </main>
      </div>
    )
  }
}
