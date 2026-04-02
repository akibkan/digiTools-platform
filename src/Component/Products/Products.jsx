// import React, { useState } from 'react';
import { use } from "react";
import ProductsCard from './ProductsCard';

const Products = ({productsPromise, cards, setCards}) => {
    const products = use(productsPromise)
    
    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-center space-y-2'>
                <h2 className='font-bold text-3xl'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {
                    products.map(products=> 
                   <ProductsCard key={products.id} products={products} cards={cards} setCards={setCards}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;