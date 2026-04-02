import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductsCard = ({products, cards, setCards}) => {
     const [isBuy, setIsBuy] = useState(false);
  

    // const handleBuying = () => {
    //     if (!isBuy) {
    //         setCards([...cards, products]);
    //     }
    // }

     const handleBuying = () => {
        setIsBuy(true)

        const isFound = cards.find(item => item.id === products.id);

        if(isFound){
            toast.error("Item already in cart!")
            return
        }
        setCards([...cards, products])
        toast.success("item added to cart")
     }
    return (
        <div>
             <div>
                        <div className="card  bg-base-100 shadow-sm ">
  <div className="card-body ">
    <div className='flex justify-between '>
        <img className='h-10 ' src={products.icon} alt="" />
    <span className="badge badge-xs badge-warning">{products.tag}</span>
    </div>
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">{products.name}</h2>
      <p>{products.description}</p>
      <p className="text-xl">{products.price}</p>
      
    </div>
    <ul className="mt-4 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{products.features}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{products.period}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{products.tagType}</span>
      </li>



    </ul>
    <div className="mt-6">
      <button onClick={handleBuying} className={` btn w-full rounded-full   text-white font-bold 
      ${isBuy
          ? "bg-green-500" 
      : "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
      }`}>

      {/* <button 
  onClick={handleBuying} 
  className={`btn w-full rounded-full text-white font-bold 
    ${isBuy 
      ? "bg-green-500" 
      : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa]"
    }`}
> */}




        {isBuy ? "Added to card": "Buy Now"}</button>
    </div>
  </div>
</div>
                    </div>
        </div>
    );
};

export default ProductsCard;