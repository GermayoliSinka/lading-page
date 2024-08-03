// src/app/components/Footer.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black py-6 text-white text-center">
            <div className="container mx-auto">
                <div className="mb-4">
                    <p>&copy; 2024 Library. All rights reserved.</p>
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </div>
                <div className="text-sm">
                    <p>123 Library St, Booktown, BK 12345</p>
                    <p>Email: <a href="mailto:contact@library.com" className="hover:underline">contact@library.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
