import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Page/Header';
import Book from './Book';

const url = 'http://localhost:3000/readingList'

const DisplayBooks = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    fetchBook()
    checkReadingList()
  }, []);

  const fetchBook = () => {

    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(response => response.json())
      .then(response => {
        setData(response)
      })
      .catch(error => { console.log(error) })

  }

  const postData = (data) => {
    
    const sendData = {
      'id': data
    }

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(sendData)
    }

    fetch(url, config)
      .then(response => {
        if (response.ok) {
          checkReadingList()
          return Promise.resolve(response)
        }
        return Promise.reject(response);
      })
  }

  const checkReadingList = () => {
    fetch(url)
      // Return JSON
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response);
      })
      // Set initial array
      .then(response => {
        setReadingList(response)
        return response
      }, networkError => {
        console.log(networkError.message)
      })
  }

  return (
    <div>
      <Header />
      <Book data={data} id={id} addToList={postData} checkReadingList={readingList}/>
    </div>
  )
}

export default DisplayBooks