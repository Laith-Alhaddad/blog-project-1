import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section>
        <div>
          <img src={images.Logo} alt= "Logo"/>  
        </div>
        <div>
         <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Faq</a></li>
         </ul>
         <button>Sign in</button>
        </div>
    </section>
  )
}

export default Header