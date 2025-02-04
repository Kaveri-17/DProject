import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is set up

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pages = [
        { title: 'Page 1', content: 'Content for page 1 goes here.', imageUrl: 'https://www.shutterstock.com/image-vector/capacity-building-banner-process-business-260nw-2146403235.jpg' },
        { title: 'Page 2', content: 'Content for page 2 goes here.', imageUrl: 'https://www.shutterstock.com/image-vector/capacity-building-banner-process-business-260nw-2146403235.jpg' },
        { title: 'Page 3', content: 'Content for page 3 goes here.', imageUrl: 'https://www.shutterstock.com/image-vector/capacity-building-banner-process-business-260nw-2146403235.jpg' },
        { title: 'Page 4', content: 'Content for page 4 goes here.', imageUrl: 'https://www.shutterstock.com/image-vector/capacity-building-banner-process-business-260nw-2146403235.jpg' },
        { title: 'Page 5', content: 'Content for page 5 goes here.', imageUrl: 'https://www.shutterstock.com/image-vector/capacity-building-banner-process-business-260nw-2146403235.jpg' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [pages.length]);

    const prevPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(pages.length - 1);
        }
    };

    const nextPage = () => {
        if (currentIndex < pages.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <div className="container mx-auto py-10" style={{ marginTop: "20px " }}>
            <div className="relative overflow-hidden shadow-lg"> {/* Added shadow */}
                {/* Carousel Container */}
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {pages.map((page, index) => (
                        <div key={index} className="min-w-full p-6">
                            <img src={page.imageUrl} alt={`Image for ${page.title}`} className="w-full h-auto object-cover mb-4" /> {/* Ensured responsiveness */}
                            <h2 className="text-2xl font-bold">{page.title}</h2>
                            <p className="mt-4">{page.content}</p>
                        </div>
                    ))}
                </div>
                {/* Navigation Buttons */}
                <button onClick={prevPage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">Prev</button>
                <button onClick={nextPage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">Next</button>
            </div>
        </div>
    );
};

export default Carousel;
