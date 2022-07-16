function Fetch(URL) {
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      return response
    })
    .catch(error => { console.log(error) })
}

export default Fetch