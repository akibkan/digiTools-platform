import React from 'react';

const Started = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='space-y-3 text-center mb-5 mt-5'>
                <h2 className='text-2xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div>
                <div>
                    <div className="card bg-base-100 w-full shadow-sm">
                            <div className="card-actions flex justify-end ">
      <p className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-[50%] p-2 text-white">01</p>
    </div>
  <figure className="px-10 pt-10">
    
    <img
      src="/public/user.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Create Account</h2>
    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

  </div>
</div>
                </div>
            </div>
            <div>
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-actions flex justify-end ">
      <p className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-[50%] p-2 text-white">02</p>
    </div>
  <figure className="px-10 pt-10">
    
    <img
      src="/public/package.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>

  </div>
</div>
                </div>
            </div>

            <div>
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-actions flex justify-end ">
      <p className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-[50%] p-2 text-white">03</p>
    </div>
  <figure className="px-10 pt-10">
    
    <img
      src="/public/rocket.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>

  </div>
</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Started;