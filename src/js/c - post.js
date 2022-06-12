const BASE_URL = 'http://localhost:4040'

const newBook = {
  title: 'Text book',
  author: 'Andrey',
  genres: 'JS',
  rating: '10'
}






function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify((book))
  }
 return fetch(`${BASE_URL}/books`, options)
    .then(res => res.json())
    .then(console.log)
    
}

addBook(newBook)

addBook({
  title: 'Text book REACT',
  author: 'Andrey HERZHOV',
  genres: 'IT',
  rating: '11'
})  
.then(renderBook)

  function renderBook(book) {
    console.log(book),
    console.log('BackEnd')
  }