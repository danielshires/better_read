import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Page/Header';
import Book from './Book';

const DisplayBooks = () => {
  
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBook()
  }, []);

  const fetchBook = () => {

    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(response => response.json())
      .then(response => {
        setData(response)
        // console.log(response)
        // this.setState({
        //   title: res.title,
        //   firstPublish: res.first_publish_date,
        //   description: res.description,
        //   coverURL: `https://covers.openlibrary.org/b/id/${res.covers[1]}-L.jpg`
        // }, () => { 
        //   console.log(this.state)
        //  })
      })
      .catch(error => { console.log(error) })

  }

  return (
    <div>
      <Header />
      <Book data={data}/>
    </div>
  )
}

export default DisplayBooks