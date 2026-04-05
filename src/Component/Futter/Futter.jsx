import React from 'react';

const Futter = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-10  bg-[#101727] text-white '>
                <div>
                    <h1 className='text-2xl font-bold'>DigiTools</h1>
                    <p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Product</h3>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Company</h3>
                    <p>Company</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Resources</h3>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h3>Social Links</h3>
                    <div className='flex  flex-wrap gap-2'>
                        <img className='bg-white  p-1 rounded-full' src="/public/products/products/Instagram.png" alt="" />
                        <img className='bg-white p-1 rounded-full' src="/public/products/products/Facebook.png" alt="" />
                        <img className='bg-white p-1 rounded-full' src="/public/products/products/fi_5968958.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Futter;