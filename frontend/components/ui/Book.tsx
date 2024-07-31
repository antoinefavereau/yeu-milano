import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const EyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-in see modalImage" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M7 10l6 0" />
        <path d="M10 7l0 6" />
        <path d="M21 21l-6 -6" />
    </svg>
);

interface PagePairProps {
    frontImage: string;
    backImage: string;
    className?: string;
    onClick: (direction: 'left' | 'right') => void;
    zIndex: number;
}

const PagePair: React.FC<PagePairProps> = ({ frontImage, backImage, className = '', onClick, zIndex }) => (
    <div className={`paper ${className}`} style={{ zIndex }}>
        <figure className="front" onClick={() => onClick('right')}>
            <Image src={frontImage} width="1000" height="1000" alt="" />
            {EyeIcon}
        </figure>
        <figure className="back" onClick={() => onClick('left')}>
            <Image src={backImage} width="1000" height="1000" alt="" />
            {EyeIcon}
        </figure>
    </div>
);

interface BookProps {
    images: string[];
}

const Book: React.FC<BookProps> = ({ images }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [zIndexes, setZIndexes] = useState<number[]>(Array(images.length / 2).fill(0).map((_, i) => i + 1));

    const getPagePairs = (images: string[]): [string, string][] => {
        const pairs: [string, string][] = [];
        for (let i = 0; i < images.length; i += 2) {
            pairs.push([images[i], images[i + 1]]);
        }
        return pairs;
    };

    const pagePairs = getPagePairs(images);

    useEffect(() => {
        const newZIndexes = zIndexes.map((_, i) => {
            if (i < pageIndex) return i + 1;
            return pagePairs.length - i;
        });
        setZIndexes(newZIndexes);
    }, [pageIndex]);

    const handlePageClick = (direction: 'left' | 'right') => {
        setPageIndex((prevIndex) => {
            if (direction === 'right' && prevIndex < pagePairs.length) {
                return prevIndex + 1;
            } else if (direction === 'left' && prevIndex > 0) {
                return prevIndex - 1;
            }
            return prevIndex;
        });
    };

    return (
        <div className={`book ${pageIndex === 0 ? '' : 'open'}`}>
            <div className="paper last">
                <figure className="back"></figure>
                <figure className="front"></figure>
            </div>
            {pagePairs.map((pair, index) => (
                <PagePair
                    key={index}
                    frontImage={pair[0]}
                    backImage={pair[1]}
                    className={index < pageIndex ? 'flip' : ''}
                    onClick={handlePageClick}
                    zIndex={zIndexes[index]}
                />
            ))}
            <div className="side"></div>
            <div className="bottom"></div>
        </div>
    );
};

export default Book;
