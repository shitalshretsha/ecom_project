import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = ({location}) => {
  const {cartItem} = useCart()
    
  return (
    <div className='bg-white py-3 shadow-2xl'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            {/* logo section */}
            <div className='flex gap-7 items-center'>
            <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>M</span>arket<span className='text-red-500 font-serif'>P</span>lace</h1></Link>
            <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>

            <MapPin className='text-red-500' />
            <span className='font-light'>{location ? <div className='-space-y-2'>

              <p>{location.country}</p>
              <p>{location.state}</p>
            </div>:"Add address"}</span>
            </div>

            </div>
            {/* menu section */}
            <nav className='flex gap-7 items-center'>
            <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
                
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>
                   <Link to={'/cart'} className='relative'>
                   <IoCartOutline className='h-7 w-7'/>
                   <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                   </Link>
                   <div>
                      <SignedOut>
        <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
                   </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar