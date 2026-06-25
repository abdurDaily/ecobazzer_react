import React, { useState } from "react";
import { Link } from "react-router"; // আপনার ইমপোর্ট অনুযায়ী রাখা হলো
import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import menu from "../menu";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("categories");
  
  // ১. কোন মোবাইল সাবমেনু ওপেন থাকবে তা ট্র্যাক করার জন্য স্টেট
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleHandle = (e) => {
    setSideBar(!sideBar);
    if (e.target === e.currentTarget) {
      setSideBar(false);
    }
  };

  // সাবমেনু ওপেন/ক্লোজ করার হ্যান্ডলার ফাংশন
  const handleSubMenuToggle = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const test = `flex gap-3 items-center relative after:absolute after:content-[''] after:w-[2px] after:-left-[12px] after:h-[70%] after:bg-[#CCCCCC] `;

  return (
    <div className="relative">
      <div className="container py-3 px-5 lg:px-0 lg:shadow-none shadow-lg mx-auto grid grid-cols-5 items-center">
        <div className="col-span-1">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>

        <div className="col-span-3 hidden lg:flex justify-center">
          <form action="" className="flex relative">
            <input
              className="w-[400px] border placeholder:text-[#808080] border-[#E5E5E5] pl-8 py-3 focus:outline-none rounded-tl-[6px] rounded-bl-[6px]"
              type="text"
              placeholder="Search"
            />
            <span className="absolute left-5 top-1/2 -translate-1/2 leading-0 text-[#000000]">
              <IoSearchOutline />
            </span>
            <Button
              content="search"
              styles="bg-green-500 cursor-pointer px-[24px] text-white rounded-br-[6px] rounded-tr-[6px]"
            />
          </form>
        </div>

        <div className="col-span-1 hidden lg:flex gap-5 items-center justify-end">
          <div>
            <span className="text-3xl">
              <CiHeart />
            </span>
          </div>
          <div className={test}>
            <div className="relative">
              <span className="text-3xl">
                <HiOutlineShoppingBag />
              </span>
              <span className="absolute border-3 border-white -right-[7px] top-0 bg-[#2C742F] text-white text-[12px] w-[20px] h-[20px] rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div>
              <p className="text-[12px] leading-3">Shopping cart:</p>
              <b className="text-[14px]">$57.00</b>
            </div>
          </div>
        </div>

        {/* mobile menu bar */}
        <div
          onClick={toggleHandle}
          className="lg:hidden col-span-4 flex justify-end "
        >
          <span className="text-xl cursor-pointer">
            <BiMenuAltRight />
          </span>
        </div>
      </div>

      {/* sidebar */}
      <div
        onClick={() => setSideBar(false)}
        className={`bg-black/30 w-full h-screen transition-opacity absolute top-0 left-0 transform duration-500 z-50 ${
          !sideBar ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative h-full w-2/3 max-w-[66%] bg-white transition-transform duration-500 ease-in-out ${
            !sideBar ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <span
            className="absolute -right-7 bg-white w-[30px] h-[30px] flex items-center justify-center top-0 cursor-pointer"
            onClick={toggleHandle}
          >
            <IoMdClose />
          </span>

          <div>
            <Button
              click={() => setActiveMenu("categories")}
              styles={`w-1/2 text-black ${activeMenu === "categories" ? "border-b bg-green-50 border-b-green-500" : ""} text-sm p-3 text-[#777]`}
              content="Categories"
            />
            <Button
              click={() => setActiveMenu("menu")}
              styles={`w-1/2 text-black ${activeMenu === "menu" ? "border-b bg-green-50 border-b-green-500" : ""} text-sm p-3 text-[#777]`}
              content="menu"
            />

            {/* ২. মোবাইল মেনু লিস্ট (আপডেটেড ও ফিক্সড) */}
            {activeMenu === "menu" && (
              <ul className="p-4 flex flex-col gap-2">
                {menu.map((el, index) => {
                  const hasSubMenu = el.subMenu && el.subMenu.length > 0;
                  const isSubMenuOpen = openSubMenuIndex === index;

                  return (
                    <li key={index} className="relative cursor-pointer border-b border-gray-100 pb-2">
                      <div 
                        className="flex justify-between items-center w-full p-2 hover:bg-gray-50 rounded"
                        // সাবমেনু থাকলে ক্লিকে টগল হবে
                        onClick={() => hasSubMenu && handleSubMenuToggle(index)}
                      >
                        {/* সাবমেনু থাকলে লিংকের ডিফল্ট বিহেভিয়ার বন্ধ থাকবে যাতে ড্রপডাউন খোলে */}
                        <Link 
                          to={el.path} 
                          onClick={(e) => hasSubMenu && e.preventDefault()}
                          className="text-gray-800 font-medium block w-full"
                        >
                          {el.title}
                        </Link>
                        {hasSubMenu && (
                          <span className="text-xs text-gray-500">
                            {isSubMenuOpen ? "▲" : "▼"}
                          </span>
                        )}
                      </div>

                      {/* মোবাইল সাবমেনু লিস্ট (কন্ডিশনাল রেন্ডারিং) */}
                      {hasSubMenu && isSubMenuOpen && (
                        <ul className="mt-1 ml-4 pl-2 border-l border-green-500 flex flex-col gap-1 bg-gray-50 rounded p-2 transition-all">
                          {el.subMenu.map((subMenu, subIndex) => {
                            return (
                              <li 
                                key={subIndex} 
                                className="p-2 hover:text-green-600 text-sm"
                                onClick={(e) => e.stopPropagation()} // বাবলিং রোধ করার জন্য
                              >
                                <Link to={subMenu.path} className="block w-full">
                                  {subMenu.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            
            {activeMenu === "categories" && (
              <div className="p-4">
                <p>categories</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;