import React from 'react';
import SecondBanner from './SecondBanner';

const Banner = () => {
    return (
        <>
        <div className='flex w-10/12 mx-auto mt-15 items-center'>
            <div>
                <div className="inline-block px-6 py-2 rounded-full bg-linear-to-r from-[#bcb6e8] to-[#7C4DFF]/20 mb-5">
                    <p className="bg-linear-to-r from-[#9839f6] to-[#7C4DFF] bg-clip-text text-transparent font-medium text-[16px]">
                        New: AI-Powered Tools Available
                    </p>
                </div>
                <h2 className='font-extrabold text-5xl mb-2'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-[#627382] mb-3'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating fastr today.Explore Products
                </p>
                <div className='flex gap-2'>
                    <button className="btn text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-4xl">Explore Products</button>
                    <button className="btn btn-outline btn-error  bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-4xl bg-clip-text text-transparent ">Watch Demo</button>
                    
                </div>
            </div>
            <div>
                <img src="../../../public/banner.png" alt="" />
            </div>
            
        </div>
            <SecondBanner></SecondBanner>
        </>
        
    );
};

export default Banner;