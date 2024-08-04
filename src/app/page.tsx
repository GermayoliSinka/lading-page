'use client';

import Pagination from "./components/Pagination";
import { useState, useEffect } from 'react';
import BookCard from './components/BookCard';
import axios from 'axios';
import Carrusel from "./components/Carrusel";

const ITEMS_PER_PAGE = 10;

export default function Home() {

  const images = [
    'https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2024/06/26/2024062622070850747.jpg', // Reemplaza con la URL de la imagen de Google
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfFZ-3HtJW-0rKYhgWQ-WwttrzrqWeVxtSIfvB4ZLs_T5xYFbQR1kDoTd42yJ11ydqFk&usqp=CAU', // Reemplaza con la URL de la imagen de Google
    'https://cloudfront-us-east-1.images.arcpublishing.com/prisaradiomx/HNY6EECV6VKEZOCDQ2CBE4XQOA.jpg', // Reemplaza con la URL de la imagen de Google
    'https://cdn-3.expansion.mx/dims4/default/4e894c2/2147483647/strip/true/crop/1797x1021+0+0/resize/1800x1023!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F46%2Ff0%2F9c8395ab415ba05189bd43827a9e%2Fferia-del-libro-2022.jpg', // Reemplaza con la URL de la imagen de Google
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
