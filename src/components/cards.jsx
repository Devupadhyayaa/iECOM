import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cart/cartslice';

const Cards = ({id,title,img,desc,price}) => {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  return (
    <div className="card w-[100%] bg-[#ffffff] rounded-[12px] p-[15px] h-[690px]">
        <div className="image w-[100%] h-[300px]">
            <img src={img} alt={title} className='object-contain w-[100%] h-[100%]'/>
        </div>
        <div className="content h-[250px] mt-[20px] overflow-scroll">
            <ul className="list flex flex-col gap-[10px] list-none">
               <li className='p-[5px] h-[100px] overflow-scroll'>
                 <div className="title text-[22px] font-bold font-[Noto Sans, sans-serif]">
                    <span>{title}</span>
                 </div>
               </li>
               <li className='p-[10px] bg-[#d9d8d8] rounded-[5px]'><span className='font-bold'>About:</span><p>{desc}</p></li>
            </ul>
        </div>
        <div className="buttons mt-[20px] mb-[15px] p-[5px] flex justify-around">
            <button className='w-[8rem] p-[7px] bg-[grey] rounded-[12px] text-white text-[18px] font-[bolder] cursor-pointer hover:bg-[#303030]'>$ {price}</button>
            <button className='w-[8rem] p-[7px] bg-[yellow] rounded-[12px] text-[18px] cursor-pointer hover:bg-[#4199ff]' onClick={(e)=>{dispatch(addToCart({id,title,desc,price,img}))}}> Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards
