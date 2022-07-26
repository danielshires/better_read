import React, { Component } from 'react'
import SubjectRow from '../../components/Subject/SubjectRow';
import Header from '../../components/HeroBanners/Header';
import Hero from './Hero';

export default class Home extends Component {
  render() {
    return (
      <div className="App mb-96">
        <header className="App-header">
          <Header />
        </header>
        <section className="container mx-auto">
          <Hero title="The better way to read" subTitle="Discover new books, track the books you’ve read and those you want to read" />
        </section>
        <main className="container mx-auto flex flex-col gap-10 lg:gap-32">
          <SubjectRow subjectData={this.sujectResponse} />
        </main>
      </div>
    )
  }
}
