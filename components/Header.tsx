"use client";

import Link from "next/link"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);

      // add scroll event
      window.addEventListener('scroll', handleScroll);
      // clear scroll event
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  },[]);

  return (
    <header className={`${headerActive ? 'h-[80px]' : 'h-[100px]'} sticky max-w-[1920px] top-0 w-full bg-primary-200 transition-all z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href='/'>
          <h1 className='flex-[0.6] cursor-pointer text-[24px] text-[#EFC40F] font-bold uppercase'>
            June<span className='text-white'>Profile</span>
          </h1>
        </Link>
        {/* mobile nav */}
        <MobileNav containerStyles={`${headerActive ? 'top-[70px]' : 'top-[100px]'} ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white transition-all xl:hidden`} />
        <div>
          {/* desktop nav */}
          <Nav containerStyles='gap-8 hidden xl:flex' />
          {/* hide & open menu hamburger */}
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header