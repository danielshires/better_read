import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../HeroBanners/Header';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, push, set, get, child } from "firebase/database";

const DisplayBooks = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [firebaseResponse, setFirebaseDB] = useState([]);

  useEffect(() => {
    fetchBook()
    checkReadingList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBook = () => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(response => response.json())
      .then(response => {
        setData(response)
      })
      .catch(error => { console.log(error) })

  }

  const addToReadingList = (data) => {

    const db = getDatabase();
    const postListRef = ref(db, 'readingList');
    const newPostRef = push(postListRef);

    function writeUserData(bookID, uniqueID) {
      set(newPostRef, {
        'id': bookID,
        'key': uniqueID
      });
    }

    writeUserData(data, uuidv4())

    checkReadingList()
  }

  const checkReadingList = () => {

    const dbRef = ref(getDatabase());

    get(child(dbRef, `readingList`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setFirebaseDB(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <Header />
      <Book data={data} id={id} addToReadingList={addToReadingList} firebaseDb={firebaseResponse} />
    </div>
  )
}

export default DisplayBooks