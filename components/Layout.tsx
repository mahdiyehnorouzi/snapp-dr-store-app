import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    onSearch: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">My Store</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="py-1 px-2 rounded-lg bg-gray-700 text-white"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </header>
            <main className="flex-grow container">
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 My Store. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;