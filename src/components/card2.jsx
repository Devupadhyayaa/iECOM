import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrease, Increase } from '../Redux/cart/cartslice'

const Card2 = ({image,title,desc,quantity,id}) => {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  return (
    <div className='w-[100%] bg-[#ffffff] h-[335px] flex-shrink-0 rounded-[9px] flex'>
     <div className="cartImg w-[30%] h-[100%] flex justify-center items-center">
      <img src={image} className="object-contain w-[70%] h-[70%]"  alt="" />
     </div>
     <div className="CartContent flex flex-col pt-[30px] pb-[20px] w-[45%]">
        <div className="cartTitle mb-[20px] text-[23px] font-bold">
          <span>{title}</span>
        </div>
        <div className="CartDesc overflow-scroll bg-[#f3f3f3] p-[5px] rounded-[5px]">
          <span className='font-bold'>About:</span>
          <p>{desc}</p>
        </div>
     </div>
     <div className="btns w-[25%] pt-[50px] pb-[22px] flex flex-col items-center justify-between">
        <div className="quantity flex gap-[20px] w-[40%] justify-center border-[2px] border-[black] rounded-[6px]">
          <button className='bg-[#434343] w-[40px] text-[20px] text-white rounded-[3px]' onClick={()=>{dispatch(Decrease(id))}}>-</button>
          <span className='flex justify-center items-center'>{quantity}</span>
          <button className='bg-[#434343] w-[40px] text-[20px] text-white rounded-[3px]' onClick={()=>(dispatch(Increase(id)))}>+</button>
        </div>
        <div className="pricee w-[80%] p-[10px] text-center bg-[#fffb18] rounded-[12px] font-bold text-black">
          <span>BUY NOW</span>
        </div>
     </div>
    </div>
  )
}

export default Card2
