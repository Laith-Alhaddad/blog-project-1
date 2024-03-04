import React from 'react'
import { images } from '../constants'

const NavItemInfo = [
  {name: "Home"},
  {name: "Articles"},
  {name: "Pages"},
  {name: "Pricing"},
  {name: "Faq"},
  
]

const NavItem = ([name]) => {
  <li className='relative group'>
              <a href="/" className='px-4 py-2'>Home</a>
              <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
              </li>
}

const Header = () => {
  
  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img src={images.Logo} alt= "Logo"/>  
        </div>
        <div className='flex gap-x-9 items-center'>
         <ul className='flex gap-x-5 font-semibold'>
        {NavItemInfo.map((item) =>(
          <NavItem key={item.name}/>
        ))}
         </ul>
         <button className='border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>
          Sign in
          </button>
        </div>
        </header>
    </section>
  )
}

export default Header