// pages/index.js
import { useEffect, useState } from 'react';
import { getAllBooks, deleteBook } from '/services/bookService'; // Импортируем сервис
import styles from '../styles/Home.module.css';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getAllBooks(); // Получаем книги из сервиса
            setBooks(data);
        };
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        await deleteBook(id); // Используем метод из сервиса
        setBooks(books.filter(book => book.id !== id)); // Обновляем состояние после удаления
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Book List</h1>
            <button
                className={styles.addButton}
                onClick={() => window.location.href = '/add'}
            >
                Add Book
            </button>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.headerCell}>Title</th>
                    <th className={styles.headerCell}>Author</th>
                    <th className={styles.headerCell}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={book.id} className={`${styles.tableRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`}>
                        <td className={styles.cell}>{book.title}</td>
                        <td className={styles.cell}>{book.author}</td>
                        <td>
                            <button
                                className={styles.button}
                                onClick={() => window.location.href = `/book/${book.id}`}
                            >
                                Read
                            </button>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDelete(book.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
