import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." value={query} onChange={handleChange} className="border p-2" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2">Search</button>
        </form>
    );
};

export default SearchBar;
