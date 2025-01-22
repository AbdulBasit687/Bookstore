import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import './AdminDashboard.css'; // Import custom CSS for styling

function AdminDashboard() {
    const [refreshKey, setRefreshKey] = useState(0);

    // Function to trigger a refresh of the book list
    const refreshBookList = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="admin-dashboard">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="form-container">
                <BookForm onBookChange={refreshBookList} />
            </div>
            <div className="list-container">
                <BookList key={refreshKey} />
            </div>
        </div>
    );
}

export default AdminDashboard;
