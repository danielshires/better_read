import React, { Component } from 'react'
import DisplayBooks from './DisplayBooks'


export default class Search extends Component {

  constructor() {
    super()
    this.state = {
      search: {
        key: '',
        title: '',
        ia: ''
      },
      firstResult: {
        key: '',
        title: '',
        ia: '',
        description: ''
      }

    }
  }

  // fetch(endpoint, { cache: "no-cache" }).then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   throw new Error("Request failed!")
  // }, (networkError)=>{
  //   console.log(networkError.message)
  // });

  componentDidMount() {

    const FetchData = async () => {
      const searchURL = `http://openlibrary.org/search.json?q=frankenstein`

      try {
        const response = await fetch(searchURL)
        const books = await fetch(jsonResponse)

        if (response.ok) {
          const jsonResponse = await response.json()
          // const bookResponse = await books.json()
          console.log(books)
          setInitialState(jsonResponse)
          // setBookState(bookResponse)
          // console.log(bookResponse)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const setInitialState = res => {
      this.setState({
        ...this.state,
        search: {
          key: res.docs[0].key,
          title: res.docs[0].title,
          ia: res.docs[0].ia[0],
        },
      }, () => {
        console.log(this.state)
      })
    }

    const setBookState = res => {
      this.setState({
        ...this.state,
        firstResult: {
          title: res.title,
          firstPublish: res.first_publish_date,
          description: res.description,
          coverURL: `https://covers.openlibrary.org/b/id/${res.covers[1]}-L.jpg`
        }
      }, () => {
        console.log(this.state)
      })
    }

    FetchData()
  }

  render() {
    return (
      <div>
        <h1>{this.state.firstResult.title}</h1>
        <p>{this.state.firstResult.description}</p>
      </div >
    )
  }
}
