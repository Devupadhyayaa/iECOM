import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollThreshold = 50; // Adjust this threshold as needed
        setIsScrolled(scrollTop > scrollThreshold);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`nav bg-[#f7f8f8d0] sticky top-[20px] h-[80px] w-[70vw] mx-auto rounded-[22px] ${isScrolled ? 'scrolled' : ''}`}>
        <ul className="navitems flex justify-center p-[20px] gap-[180px] items-center h-[100%] text-[28px] ">
            <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/">HOME</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/cart">CART</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
