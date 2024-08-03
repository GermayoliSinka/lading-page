// src/app/book/[id]/page.tsx

"use client"; 

import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';


interface Book {
    id: number;
    title: string;
    authors: string;
    description: string;
    imageUrl: string;
    rating: number;
    genres: string;
    num_pages: number;
    Quote1: string;
    Quote2: string;
    Quote3: string;

    }

    export default function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
        if (id) {
            try {
            const response = await axios.get(`https://example-data.draftbit.com/books/${id}`);
            setBook(response.data);
            } catch (error) {
            setError('Error fetching book details.');
            } finally {
            setLoading(false);
            }
        }
        };

        fetchBook();
    }, [id]);

    if (loading) return <p>Cargando</p>;
    if (error) return <p>{error}</p>;

    if (!book) return <p>no existe</p>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">{book.title}</h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
                src={book.imageUrl}
                alt={book.title}
                className="w-full md:w-1/3 h-auto object-cover rounded-lg max-h-[500px] mx-auto"
                width={500}  
                height={500} 
            />

            <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-2">Authors: {book.authors}</h2>
            <p className="text-lg mb-4">{book.description}</p>
            <p className="font-semibold mb-2">Rating: {book.rating}</p>
            <p className="font-semibold mb-2">Genres: {book.genres}</p>
            <p className="font-semibold mb-2">Number of Pages: {book.num_pages}</p>
            <div className="mt-4">
                <p className="italic">“{book.Quote1.replace(/"/g, '&quot;')}”</p>
                <p className="italic">“{book.Quote2.replace(/"/g, '&quot;')}”</p>
                <p className="italic">“{book.Quote3.replace(/"/g, '&quot;')}”</p>
            </div>
            </div>
        </div>
        </div>
    );
}
