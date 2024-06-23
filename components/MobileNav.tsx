"use client";

import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll'

const links = [
  {name: 'Home', target: 'home', offset: -100},
  {name: 'About me', target: 'aboutme', offset: -80},
  {name: 'Projects', target: 'projects', offset: -80},
  {name: 'Contact', target: 'contact', offset: 0},
]

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  })
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${isMobile && 'active'}`}
            className='cursor-pointer nav-link transition-all'
            key={index}
          >
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}

export default MobileNav