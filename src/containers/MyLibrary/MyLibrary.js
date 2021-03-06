import React, { Component } from 'react'
import Header from '../../components/HeroBanners/Header'
import SingleBookContainer from '../../components/Subject/SingleBookContainer'
import Hero from '../HomePage/Hero'
import Emoji from 'a11y-react-emoji'
import { getDatabase, ref, get, child, remove } from "firebase/database";

export default class MyLibrary extends Component {

  constructor() {
    super()
    this.state = {
      readingList: [],
      firebaseReponse: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {

    const dbRef = ref(getDatabase());

    get(child(dbRef, `readingList`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.setState({
          firebaseReponse: snapshot.val()
        })
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  removeFromReadingList = (data) => {
    const db = getDatabase();
    const dbRef = ref(db, `readingList/${data}`);
    remove(dbRef)
    this.fetchData()
  }

  searchObj = (obj) => {
    return Object.keys(obj).map(key => {
      return <SingleBookContainer key={obj[key].key} dataBaseKey={key} id={obj[key].id} readingList={true} readingListFirebase={this.state.firebaseReponse} removeFromReadingList={this.removeFromReadingList} />
    })
  }

  renderReadingList = () => {
    if (Object.keys(this.state.firebaseReponse).length > 0) {
      return this.searchObj(this.state.firebaseReponse)
    }
    else {
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
