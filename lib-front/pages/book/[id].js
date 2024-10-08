// pages/book/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '/styles/BookDetails.module.css'; // Import the CSS module

const BookDetails = () => {
    const router = useRouter();
    const { id } = router.query; // Get the book ID from the URL
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            if (id) {
                const response = await fetch(`http://localhost:8080/api/v1/book/${id}`);
                const data = await response.json();
                setBook(data);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{book.title}</h1>
            <div className={styles.details}>
                <p><strong>Author:</strong> {book.author}</p>
            </div>
            <button className={styles.button} onClick={() => window.location.href = `/`}>Go Back</button>
        </div>
    );
};

export default BookDetails;
