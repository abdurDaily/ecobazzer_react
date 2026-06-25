import React from "react";
import { Link } from "react-router";

const Header = () => {
  const menu = [
    {
      title: "Home",
      path: "/",
      subMenu: [
        { title: "submenu 01", path: "/submenu 01" },
        { title: "submenu 01", path: "/submenu 01" },
        { title: "submenu 01", path: "/submenu 01" },
      ],
    },
    { title: "About", path: "/about" },
    {
      title: "Contact",
      path: "/contact",
      subMenu: [
        { title: "submenu 01", path: "/submenu 01" },
        { title: "submenu 01", path: "/submenu 01" },
        { title: "submenu 01", path: "/submenu 01" },
      ],
    },
  ];

  return (
    <div className="container mx-auto hidden lg:block">
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <div className="flex gap-5 items-center">
            {/* categories */}
            <span className="bg-green-500 text-white py-2 px-10">
              categories
            </span>
            {/* menus */}
            <ul className="flex gap-5">
              {menu.map((el, index) => {
                return (
                  <li key={index} className="group relative">
                    <Link to={el.path}> {el.title} </Link>

                    {el.subMenu && (
                      <>
                        <ul className="absolute transition-transform duration-300 w-[150px] invisible group-hover:visible group-hover:bg-amber-300 translate-y-5 group-hover:translate-y-0">
                          {el.subMenu.map((subEl, index) => {
                            return (
                              <li>
                                <Link to={subEl.path}>{subEl.title}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-2 flex justify-end">
          <h1>contact no</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
