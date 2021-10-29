import React, { Component,useState,useEffect } from "react";
import Link from "next/link";

const Header = ({header_data}) => { 


  const [abovetop, setabovetop] = useState("8rem")
  

  useEffect(() => {
       document.addEventListener("scroll", () => { 
      
        const top = window.scrollY<1  ?(window.innerWidth<1024?("8rem"):("8rem")) : ("0px");
        setabovetop(top);
    });
  }, [])
  return (
    <>
      <div className=" ">
        <div
          className="flex justify-center h-32 pt-3 text-center bg-header bg-white bg-repeat-x  "
          
        >
          <img
            className="h-20 w-15 md:mr-1 "
            src={header_data?.data? header_data?.data[0]?.logo?.data?.full_url : "https://rosemarydn.com/images/logo.png"}
            //  src="https://rosemarydn.com/images/logo.png"
          />
          <div className="  text-[#272d57] item-center ">
            <span className="font-serif text-xl tracking-normal ml-1 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" >
            {header_data?.data? header_data?.data[0]?.title : "Maitretech Academy Public School"}
              {/* Rose Mary Hr. Sec. School */}
            </span>
            <p className=" flex  justify-center       font-medium md:font-semibold">
            {header_data?.data? header_data?.data[0]?.address : "  Dwarka Nagar Bhopal"}
              {/* Dwarka Nagar Bhopal */}
            </p> 
          </div>
        </div>
        <nav className="z-10 shadow-sm stickyt flex flex-wrap items-center justify-center bg-[#163487] md:py-3  lg:py-3   " style={{  top: `${abovetop}` }}>
          <label
            className="items-center block px-3 py-2 text-white border border-teal-400 rounded cursor-pointer lg:hidden hover:border-white"
            htmlFor="menu-toggle"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden " type="checkbox" id="menu-toggle" />

          <div
            className="flex-grow hidden w-full lg:flex lg:items-center  lg:w-auto "
            id="menu"
          >
            <div className="   text-sm lg:flex-grow sm:pl-0 lg:pl-60 ">
              <Link href="/">
                <a className="block mt-2 mr-4 text-center text-white hover:no-underline lg:inline-block lg:mt-0">
                  Home
                </a>
              </Link>

              <a className="block text-center lg:inline-block">
                <div className="relative inline-block dropdown hover:mb-40 lg:hover:mb-0">
                  <button className="inline-flex mt-2 mr-4 text-white lg:pl-24 lg:mt-0 ">
                    <span className="mr-1  ">About Us</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute z-20 hidden pt-0 pb-0 text-white dropdown-menu ">
                    <li className="border-b border-gray-700 ">
                      <Link href="/AboutUs">
                        <a className="block px-4 py-2 whitespace-no-wrap bg-[#2355b9] hover:no-underline text-white hover:bg-white hover:text-black">
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li className="border-b border-gray-700 hover:border-b hover:border-black ">
                      <Link href="/DirectorMessage">
                        <a className="block px-4 py-2 whitespace-no-wrap bg-[#2355b9] hover:no-underline text-white hover:bg-white hover:text-black">
                          Director Message
                        </a>
                      </Link>
                    </li>
             
                    <li className="border-b border-gray-700 ">
                      <Link href="/PrincipalMessage">
                        <a className="block px-4 py-2 whitespace-no-wrap bg-[#2355b9] hover:no-underline text-white hover:bg-white hover:text-black">
                          Principal Messagem
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </a>
              <a className="block text-center lg:inline-block">
                <div className="relative inline-block dropdown hover:mb-24 lg:hover:mb-0">
                  <button className="inline-flex mt-2 mr-4 text-white lg:pl-24 lg:mt-0">
                    <span className="mr-1 ">Academics</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute z-20 hidden pt-0 pb-0 text-white dropdown-menu">
                    <li className="border-b border-gray-700 hover:border-b hover:border-black ">
                      <a
                        className="block px-4 py-2 whitespace-no-wrap bg-[#2355b9] text-white hover:no-underline hover:bg-white hover:text-black"
                        href="/AdmissionProcedure"
                      >
                        Admission Procedure
                      </a>
                    </li>
                    <li className="border-b border-gray-700 hover:border-b hover:border-black ">
                      <a
                        className="block px-4 py-2 whitespace-no-wrap bg-[#2355b9] text-white hover:bg-white hover:no-underline hover:text-black"
                        href="/Facilities"
                      >
                        Facilities
                      </a>
                    </li>
                   
                     
                  </ul>
                </div>
              </a>
             <Link  href="/Gallery">
              <a
                
                className="block mt-2 mr-4 text-center text-white lg:pl-24 lg:inline-block lg:mt-0 hover:no-underline"
              >
                Gallery
              </a>
             </Link>
             <Link  href="/Contactus">
              <a
                href="/Contactus"
                className="block mt-2 mr-4 text-center text-white lg:pl-24 lg:inline-block lg:mt-0 hover:no-underline"
              >
                Contact us
              </a>
              </Link>
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
