import React from 'react';

interface Product {
    id: number;
    title: string;
    category: string;
}

interface ProductListProps {
    products: Product[];
    currentPage: number;
    productsPerPage: number;
    paginate: (pageNumber: number) => void;
    totalProducts: number;
}

const ProductList: React.FC<ProductListProps> = ({ products, currentPage, productsPerPage, totalProducts, paginate }) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className='mx-2 my-4 w-full'>
            <div className='mb-4 h-[400px]'>
                {currentProducts.map((product) => (
                    <div key={product.id} className='py-2'>{product.title}</div>
                ))}
            </div>

            <div className="mt-4 flex justify-center">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                >
                    Previous
                </button>
                {Array.from({ length: Math.ceil(totalProducts / productsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;