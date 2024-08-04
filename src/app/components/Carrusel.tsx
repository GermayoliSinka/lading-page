/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface CarouselProps {
    images: string[];
    height: string; 
}

const Carrusel: React.FC<CarouselProps> = ({ images, height }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, images.length]); // Añadido images.length como dependencia

    return (
        <div css={carouselContainerStyles}>
            <button css={arrowStyles('left')} onClick={prevSlide}>
                &#10094;
            </button>
            <div css={carouselSlideStyles(height)}>
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    css={imageStyles}
                />
            </div>
            <button css={arrowStyles('right')} onClick={nextSlide}>
                &#10095;
            </button>
            <div css={dotsContainerStyles}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        css={[dotStyles, index === currentIndex && activeDotStyles]}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

// Estilos
const carouselContainerStyles = css`
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;

const carouselSlideStyles = (height: string) => css`
    position: relative;
    width: 100%;
    height: ${height}; /* Ajusta la altura del contenedor del carrusel */
    overflow: hidden;
`;

const imageStyles = css`
    width: 100%;
    height: 100%;
    object-fit: cover; /*cubrir el contenedor */
    display: block;
`;

const arrowStyles = (direction: 'left' | 'right') => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    ${direction}: 10px;
    z-index: 1;
`;

const dotsContainerStyles = css`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 1;
`;

const dotStyles = css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 5px;
    cursor: pointer;
`;

const activeDotStyles = css`
    background: white;
`;

export default Carrusel;
