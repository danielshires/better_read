import React, { Component } from 'react'
import DisplayBooks from './Books/DisplayBooks'

const searchURL = `http://openlibrary.org/search.json?q=frankenstein`
let bookURL

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

    fetch(searchURL)
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          this.setState({
            ...this.state,
            search: {
              key: res.docs[0].key,
              title: res.docs[0].title,
              ia: res.docs[0].ia[0],
            },
          }, () => {
            console.log(this.state)
            bookURL = `https://openlibrary.org${this.state.key}?edition=${this.state.ia}`
          })
        }
        return res
      }, networkError => {
        console.log(networkError.message)
      })
      .then(res => {
        const displayURL = `https://openlibrary.org${res.docs[0].key}.json`
        fetch(displayURL)
          .then(res => res.json())
          .then(res => {

      
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
              bookURL = `https://openlibrary.org${this.state.key}`
            })
          })
          .catch(error => { console.log(error) })
      })
      .catch(error => { console.log(error) })
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
