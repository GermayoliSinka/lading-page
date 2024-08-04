import Link from 'next/link';
import Image from 'next/image';

interface BookCardProps {
    id: number;
    title: string;
    authors: string;
    description: string;
    imageUrl: string;
    rating: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, authors, description, imageUrl, rating }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col" style={{ minHeight: '500px', maxWidth: '300px' }}>
            <Link href={`/book/${id}`} className="flex flex-col h-full">
                <div className="relative w-full" style={{ height: '400px' }}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        className="rounded-md"
                        width={300} // Especifica el ancho de la imagen
                        height={400} // Especifica la altura de la imagen
                        priority // Marca esta imagen como de alta prioridad
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ajusta el tamaño para que llene el contenedor
                    />
                </div>
                <div className="flex flex-col flex-grow p-4">
                    <div className="relative text-center mb-4">
                        <span className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-400"></span>
                        <h2 className="relative text-lg font-semibold mb-2 mt-2 bg-white inline-block px-2">
                            {title}
                        </h2>
                    </div>
                    <p className="text-sm mb-2 text-gray-600 flex-grow truncated-description">
                        {description}
                    </p>
                    <div className="flex flex-col justify-between mt-auto">
                        <p className="font-semibold text-blue-600">Rating: {rating}</p>
                        <p className="text-gray-500 mt-2">Author: <span className="text-red-500">{authors}</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;
