import React, { useEffect, useState } from 'react';
import API from '../api/api'; // Import API configuration
import './BookList.css'; // Importing the CSS for styling

function BookList() {
    const [books, setBooks] = useState([]);

    // Fetch books from the API on component mount
    useEffect(() => {
        API.get('/books')
            .then((res) => {
                setBooks(res.data); // Set books from API response
            })
            .catch((err) => {
                console.error(err);
                // Fallback to dummy data in case of an error
                setBooks([
                    {
                        _id: '1',
                        name: 'The Great Gatsby',
                        author: 'F. Scott Fitzgerald',
                        price: 10.99,
                        category: 'Classic',
                        availability: true,
                    },
                    {
                        _id: '2',
                        name: '1984',
                        author: 'George Orwell',
                        price: 14.99,
                        category: 'Dystopian',
                        availability: false,
                    },
                    {
                        _id: '3',
                        name: 'To Kill a Mockingbird',
                        author: 'Harper Lee',
                        price: 12.49,
                        category: 'Fiction',
                        availability: true,
                    },
                    {
                        _id: '4',
                        name: 'The Catcher in the Rye',
                        author: 'J.D. Salinger',
                        price: 9.99,
                        category: 'Novel',
                        availability: true,
                    },
                ]);
            });
    }, []);

    return (
        <div className="book-list-container">
            <h1 className="book-list-title">Book List</h1>
            <div className="book-grid">
                {books.map((book) => (
                    <div className="book-card" key={book._id}>
                        <h2 className="book-name">{book.name}</h2>
                        <p className="book-author">Author: {book.author}</p>
                        <p className="book-price">Price: ${book.price.toFixed(2)}</p>
                        <p className="book-category">Category: {book.category}</p>
                        <p
                            className={`book-availability ${
                                book.availability ? 'in-stock' : 'out-of-stock'
                            }`}
                        >
                            {book.availability ? 'In Stock' : 'Out of Stock'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;
