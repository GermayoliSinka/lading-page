'use client'; // uso de hooks como useParams

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const BookDetails = () => {
    const { id } = useParams<{ id: string }>(); //  obtener el id
    const router = useRouter();
    const [book, setBook] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
            if (!id) {
                setError('No book ID found');
                return;
            }

            try {
                const response = await axios.get(`https://example-data.draftbit.com/books/${id}`);
                setBook(response.data);
            } catch (error) {
                setError('Failed to fetch book details');
            }
        };

        fetchBook();
    }, [id]);

    if (error) return <div>Error: {error}</div>;
    if (!book) return <div>Loading...</div>;

    return (
        <div className="p-5 m-5">
            <button
                onClick={() => router.back()}
                className="mb-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Anterior
            </button>
            <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full md:w-1/3 h-auto">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        className="w-full h-auto object-cover rounded-t-lg md:rounded-none p-5"
                        width={100}  
                        height={150} 
                        layout="responsive" 
                    />
                </div>
                <div className="md:ml-8 p-4 flex-1">
                    <div className="border-l-2 border-black pl-4">
                        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                        <h2 className="text-xl text-gray-700 mb-4">{book.authors}</h2>
                        <p className="mb-4 text-gray-800">
                            {book.description}
                        </p>
                        <p className="text-gray-600 mb-2"><strong>Rating:</strong> {book.rating}</p>
                        <p className="text-gray-600 mb-2"><strong>Pagina:</strong> {book.num_pages}</p>
                        <p className="text-gray-600 mb-4"><strong>Genero:</strong> {book.genres}</p>
                        <div>
                            <p className="font-semibold text-gray-800 mb-2"><strong>Comentarios:</strong></p>
                            <ul className="list-disc list-inside pl-4 text-gray-600">
                                {book.Quote1 && <li>&ldquo;{book.Quote1}&rdquo;</li>}
                                {book.Quote2 && <li>&ldquo;{book.Quote2}&rdquo;</li>}
                                {book.Quote3 && <li>&ldquo;{book.Quote3}&rdquo;</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
