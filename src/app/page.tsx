'use client';

import Pagination from "./components/Pagination";
import { useState, useEffect } from 'react';
import BookCard from './components/BookCard';
import axios from 'axios';
import Carrusel from "./components/Carrusel";

const ITEMS_PER_PAGE = 10;

export default function Home() {

  const images = [
    '/images/im1.jpg',
    '/images/im4.jpg',
    '/images/im3.jpg',
  ];

  const [books, setBooks] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`https://example-data.draftbit.com/books`);
        const allBooks = response.data;
        setTotalBooks(allBooks.length);
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedBooks = allBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        setBooks(paginatedBooks);
        setTotalPages(Math.ceil(totalBooks / ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [currentPage, totalBooks]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      
      <Carrusel images={images} height="600px" />

      <main className="p-4 m-10">
        <h1 className="text-2xl font-bold mb-4 text-center relative">
          <span className="absolute inset-0 border-t border-gray-400 transform translate-y-1/2"></span>
          <span className="relative bg-white px-2">Library Books</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              imageUrl={book.image_url}
              rating={book.rating}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}
