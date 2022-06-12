const BASE_URL = 'http://localhost:4040'


function deleteBook(bookId) {
    const options = {
        method: 'DELETE'
    }
    return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json())
}


deleteBook(39)