import React from 'react';

const SecondBanner = () => {
    return (
        <div>
            <div className=" w-full h-40 bg-linear-to-r/hsl from-[#4f39f6] to-[#9514fa] mt-10 mb-7 flex justify-center items-center gap-25 text-white font-bold">
                <div>
                    <p>50K+</p>
                    <p>Active Users</p>
                </div>
                <div>
                    <p>200+</p>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <p>4.9</p>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;