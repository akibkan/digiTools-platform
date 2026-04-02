import React from 'react';
import { toast } from 'react-toastify';

const Card = ({cards, setCards}) => {
    const totalPrice = cards.reduce((sum, item) => sum + item.price,0)

    const handlePayment = () => {
        setCards([]);
        toast.success("payment successful!")
    }
    const handleDelete = (item) => {
        const filteredArray = cards.filter(c => c.id !==item.id);
        setCards(filteredArray);
        toast.success("Item deleted !")
        // console.log(filteredArray);
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='font-bold text-2xl mb-5'>your card:</h3>

            {
            cards.length === 0 ? <p className='text-center text-2xl p-4 bg-gray-100 rounded-2xl'>Card is empty</p>: 
            <>
            <div className='space-y-4'>
                           {
                cards.map(item => <div className='flex justify-between border-b-gray-500 bg-gray-100' key={item.id}>
                <div className='flex items-center gap-5'>
                     <div>
                        <img className='h-10 ' src= {item.icon} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-xl">{item.price}</p>
                    </div>
                </div>
                    <div className='flex items-center'>
                        <button onClick={()=>handleDelete(item)} className='btn'>remove</button>
                    </div>
                    </div>)
            }
            </div>

            <div className='flex justify-between p-3  border-b-gray-100 bg-gray-100 mt-3'>
                <div>Total</div>
                <div>{totalPrice}</div>
            </div>

            <div>
                <button onClick={handlePayment} className=' btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-full p-2 mt-4 mb-4 text-white'>
                    Proceed To Checkout
            
                </button>
            </div>
            </>
            }



 
        </div>
    );
};

export default Card;