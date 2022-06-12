const BASE_URL = 'http://localhost:4040'






function updateBookByID(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
    
        },
        body: JSON.stringify(update)
    }
    return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(res => res.json())
}

updateBookByID({title: 'Book for interview'}, 40)
updateBookByID({rating: 20}, 41)
updateBookByID({author: 'Mango'}, 39)