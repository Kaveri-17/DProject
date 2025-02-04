import React, { useState, useRef } from 'react';
import * as LucideIcons from 'lucide-react';

const AccordionItem = ({ title, isOpen, onClick, children }) => {
    const contentRef = useRef(null);

    return (
        <div className="border-b border-gray-200 last:border-none">
            <button
                className="w-full flex justify-between items-center py-4 px-6 text-left hover:bg-gray-50 transition-colors"
                onClick={onClick}
            >
                <span className="text-gray-800 font-medium">{title}</span>
                {isOpen ? (
                    <LucideIcons.Minus className="h-5 w-5 text-gray-600" />
                ) : (
                    <LucideIcons.Plus className="h-5 w-5 text-gray-600" />
                )}
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
                }}
            >
                <div className="p-6 bg-gray-50">{children}</div>
            </div>
        </div>
    );
};

function ServiceContent5() {
    const [openItem, setOpenItem] = useState(null);

    const items = [
        {
            title: 'Mauris Blandit Aliquet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Proin Eget Tortor',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Pellentesque in Ipsum',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background with curved edges on both top and bottom */}
            <div
                className="absolute inset-0 bg-[#15314e]"
                style={{
                    borderRadius: '40% 0 0 40%',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                            alt="Laptop repair"
                            className="rounded-lg shadow-xl w-full h-auto object-cover" style={{ borderRadius: "50px", width: "80%", marginTop: "50px" }}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">
                            Device Repair & Troubleshooting
                        </h2>
                        <p className="text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation
                        </p>

                        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                            {items.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    isOpen={openItem === index}
                                    onClick={() => setOpenItem(openItem === index ? null : index)}
                                >
                                    <p className="text-gray-600">{item.content}</p>
                                </AccordionItem>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceContent5;