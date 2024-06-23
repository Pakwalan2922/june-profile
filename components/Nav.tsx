"use client";

import { Link as ScrollLink } from 'react-scroll'

const links = [
  {name: 'Home', target: 'home', offset: -100},
  {name: 'About me', target: 'aboutme', offset: -80},
  {name: 'Projects', target: 'projects', offset: -80},
  {name: 'Contact', target: 'contact', offset: 0},
]

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass='active'
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

export default Nav