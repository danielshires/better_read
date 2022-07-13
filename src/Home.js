import React, { Component } from 'react'
import SubjectRow from './components/Subject/SubjectRow';
import Header from './components/Page/Header';
import Hero from './components/Homepage/Hero';

export default class Home extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section className="container mx-auto">
          <Hero />
        </section>
        <main className="container mx-auto flex flex-col gap-10 lg:gap-20">
          <SubjectRow />
        </main>
      </div>
    )
  }
}
