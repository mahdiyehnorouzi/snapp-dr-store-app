import React, {useMemo, useState} from 'react';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import Sidebar from '@/components/Sidebar';
import useProductData from '@/hooks/useProductData';
import '../styles/globals.css';

interface Product {
    id: number;
    title: string;
    category: string;
}
const HomePage: React.FC = () => {
    const { products, loading, error } = useProductData();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = useMemo(() => {
        if (products.length > 0) {
            const allCategories = products.map((product) => product.category);
            return Array.from(new Set(allCategories));
        }
        return [];
    }, [products]);

    const filteredProducts = useMemo(() => {
        return filterProducts(products, searchTerm, selectedCategory);
    }, [products, searchTerm, selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setSearchTerm('');
        setCurrentPage(1);
        setSelectedCategory(category);
    };

    const handleShowAllClick = () => {
        setSearchTerm('');
        setCurrentPage(1);
        setSelectedCategory('');
    };

    const handleSearch = (query: string) => {
        setSearchTerm(query);
        setCurrentPage(1);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Layout onSearch={handleSearch}>
            {error && <div>Error: {error}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='flex'>
                    <Sidebar
                        categories={categories}
                        onCategoryClick={handleCategoryClick}
                        onShowAllClick={handleShowAllClick}
                    />
                    <ProductList
                        products={filteredProducts}
                        currentPage={currentPage}
                        productsPerPage={productsPerPage}
                        totalProducts={filteredProducts.length}
                        paginate={paginate}
                    />
                </div>
            )}
        </Layout>
    );
};

export default HomePage;

const filterProducts = (products: Product[], searchTerm: string, selectedCategory: string): Product[] => {
    return products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );
};