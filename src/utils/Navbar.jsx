import React from 'react';
import { Link } from 'react-router';
import Button from './Button';
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
    const test = `flex gap-3 items-center relative after:absolute after:content-[''] after:w-[2px] after:-left-[12px] after:h-[70%] after:bg-[#CCCCCC] `;
    return (
        <div className=' py-4'>
           <div className="container mx-auto grid grid-cols-5 items-center">
            <div className='col-span-1'>
                <Link to='/'>
                  <img src="/images/logo.png" alt="" />
                </Link>
            </div>
            <div className='col-span-3 flex justify-center'>
                <form action="" className='flex relative'>
                    <input className='w-[400px] border placeholder:text-[#808080] border-[#E5E5E5]  pl-8 py-3 focus:outline-none rounded-tl-[6px] rounded-bl-[6px]' type="text" placeholder='Search' />
                    <span className='absolute left-5 top-1/2 -translate-1/2 leading-0 text-[#000000]'><IoSearchOutline /></span>
                    <Button content="search" styles="bg-green-500 cursor-pointer px-[24px] text-white rounded-br-[6px] rounded-tr-[6px]" />
                </form>
            </div>
            <div className='col-span-1 flex gap-5 items-center'>
                <div> <span className='text-3xl'><CiHeart /></span> </div>
                <div className={test}> 
                    <div className='relative'>
                        <span className='text-3xl'><HiOutlineShoppingBag /></span>
                        <span className='absolute border-3 border-white -right-[7px] top-0 bg-[#2C742F] text-white text-[12px] w-[20px] h-[20px] rounded-full flex items-center justify-center'>0</span>
                    </div>
                    <div>
                        <p className='text-[12px] leading-3'>Shopping cart:</p>
                        <b className='text-[14px]'>$57.00</b>
                    </div>


                </div>
            </div>
           </div>
        </div>
    );
};

export default Navbar;