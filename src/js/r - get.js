const BASE_URL = 'http://localhost:4040'
 
 function fetchBooks() {
    return fetch(`${BASE_URL}/books`)
      .then(res => res.json())
      .then(console.log)

 }

 function fetchBook(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then(res => res.json())
    .then(console.log)

}

fetchBook(1)
fetchBook(2)
fetchBooks()