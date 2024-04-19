import React from 'react';

interface SidebarProps {
    categories: string[];
    onCategoryClick: (category: string) => void;
    onShowAllClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, onCategoryClick, onShowAllClick }) => {
    return (
        <div className="w-1/4 pr-4 bg-gray-200 h-screen">
            <h2 className="text-xl font-semibold py-2">Categories</h2>
            <button onClick={onShowAllClick} className="py-1 px-2 my-1 block w-full text-left hover:bg-gray-300 hover:text-sky-400">
                Show All Categories
            </button>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => onCategoryClick(category)}
                            className="py-1 px-2 my-1 block w-full text-left hover:text-sky-400"
                        >
                            {category.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;