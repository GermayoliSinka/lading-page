// src/app/components/Pagination.tsx
type PaginationProps = {
    currentPage: number;
    totalPages: number;
        onPageChange: (page: number) => void;
    };
    
    const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => (
        <div className="flex justify-center mt-4">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
            Anterior
        </button>
        <span className="px-4 py-2">
            Pagina {currentPage} / {totalPages}
        </span>
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
        Siguient
    </button>
    </div>
);

export default Pagination;
