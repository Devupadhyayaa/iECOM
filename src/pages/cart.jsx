import React, { useState ,useEffect ,useMemo} from 'react'
import Navbar from '../components/Navbar'
import Card2 from '../components/card2'
import { useSelector } from 'react-redux'
const Cart = () => {
  const cart = useSelector(state=>state.cart)
  const [total, settotal] = useState(0)
  const [Net, setNet] = useState(0)
  useMemo(() => {
    let ans = 0;
    cart.cartItems.forEach(ele => {
      ans+=(ele.price * ele.quantity)
    });
    ans.toFixed(2);
    settotal(ans)
    let val = ans - ((ans)*(0.2))
    val.toFixed(2);
    setNet(val);
  }, [cart])

  return (
    <>
        <Navbar/>
        <div className=' lead w-[90vw] mx-auto h-[75vh] bg-[#80808056] mt-[120px] rounded-[22px] flex items-center gap-[8px]'>
            <div className="box1 w-[70%] p-[15px] flex flex-col items-center gap-[16px] h-[98%] overflow-scroll">
                {
                  cart.cartItems.map((ele)=>{
                    return <Card2 image={ele.image} title={ele.title} desc={ele.desc} quantity={ele.quantity} id={ele.id} key={ele.id}/>
                  })
                }
            </div>
            <div className="total w-[29%] h-[97%] bg-[black] rounded-[9px] flex flex-col items-center p-[20px] gap-[40px] justify-center">
              <div className="details flex gap-[10px] w-[90%] mb-[50px]">
                <input type="text" placeholder='Enter your Pincode' className='w-[70%] p-[15px] rounded-[8px]'/>
                <button type='Submit' className='bg-[#ffff24] w-[30%] rounded-[8px]'>Enter</button>
              </div>
              <div className="total text-white border-white border-[.5px] p-[15px] w-[90%] flex flex-col gap-[40px] text-[18px]">
                <div className="cost flex justify-between">
                  <span>Total Cost</span>
                  <span>$ {total}</span>
                </div>
                <div className="discount flex justify-between">
                  <span>Discount</span>
                  <span>20%</span>
                </div>
                <div className="net flex justify-between">
                  <span>Net Amount</span>
                  <span>$ {Net}</span>
                </div>
              </div>
              <div className="checkout w-[90%]">
                <button className='p-[15px] bg-[#ffff24] w-[100%] font-bold'>CHECK OUT</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Cart
