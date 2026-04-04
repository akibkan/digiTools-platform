import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-center p-15 space-y-4'>
            <h2 className='text-2xl font-bold'>Ready to Transform Your Workflow?</h2>
            <p>
                Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
            </p>
            <div className=' flex gap-3 justify-center'>
                <button className='text-black btn rounded-full '>Explore Products</button>
                <button className='btn rounded-full bg-transparent text-white'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;