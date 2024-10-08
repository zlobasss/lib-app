// pages/add.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '/styles/AddBook.module.css'; // Import the CSS module

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/v1/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author }), // Assuming your book object requires title and author
        });

        if (response.ok) {
            router.push('/'); // Redirect to home after adding
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add a New Book</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
