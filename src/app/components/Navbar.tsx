
"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black p-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-2xl font-bold px-5">Library</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="#" className="hover:underline">Publicaciones</Link>
                    <Link href="#" className="hover:underline">Eventos</Link>
                    <Link href="#" className="hover:underline">Contacto</Link>

                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://instagram.com" className="hover:text-gray-400 mx-5" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </div>
                <button 
                    className="md:hidden text-xl" 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <Link href="#" className="block px-4 py-2 text-center hover:bg-gray-700">Publicaciones</Link>
                <Link href="#" className="block px-4 py-2 text-center hover:bg-gray-700">Contactos</Link>
            </div>
        </nav>
    );
};

export default Navbar;
