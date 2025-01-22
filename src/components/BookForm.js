import React, { useState } from 'react';
import API from '../api/api';
import './BookForm.css'; // Import custom CSS for styling

function BookForm({ existingBook }) {
    const [formData, setFormData] = useState(
        existingBook || {
            name: '',
            author: '',
            price: '',
            category: '',
            availability: true,
        }
    );

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingBook) {
            // Update book logic
            API.put(`/books/${existingBook._id}`, formData)
                .then(() => alert('Book updated successfully'))
                .catch((err) => console.error(err));
        } else {
            // Add new book logic
            API.post('/books', formData)
                .then(() => alert('Book added successfully'))
                .catch((err) => console.error(err));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <h2>{existingBook ? 'Update Book' : 'Add a New Book'}</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Book Name"
                className="form-input"
                required
            />
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
                className="form-input"
                required
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="form-input"
                required
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="form-input"
                required
            />
            <label className="form-label">
                Availability:
                <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value={true}>In Stock</option>
                    <option value={false}>Out of Stock</option>
                </select>
            </label>
            <button type="submit" className="form-button">
                {existingBook ? 'Update Book' : 'Add Book'}
            </button>
        </form>
    );
}

export default BookForm;
