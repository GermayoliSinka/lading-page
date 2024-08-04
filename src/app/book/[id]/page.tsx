// src/app/book/[id]/page.tsx
import BookDetails from '../../components/BookDetails';

export async function generateStaticParams() {
    try {
        const response = await fetch('https://example-data.draftbit.com/books');
        const books = await response.json();

        return books.map((book: { id: string }) => ({
            id: book.id.toString(), // Asegúrate de que id sea una cadena
        }));
    } catch (error) {
        console.error('Failed to fetch books for static params:', error);
        return [];
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const response = await fetch(`https://example-data.draftbit.com/books/${id}`);
        const book = await response.json();

        return <BookDetails book={book} />;
    } catch (error) {
        console.error('Failed to fetch book details:', error);
        return <div>Error loading book details</div>;
    }
}