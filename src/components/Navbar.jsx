import {useState} from 'react'
import logo from "../assets/logo.png"
import { Ri24HoursFill, RiCloseLine, RiMenu3Fill } from '@remixicon/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
    setIsOpen(!isOpen)
}
    
    return (
        <nav className="fixed bg-white py-4 left-0 right-0 z-50 m2">
            <div className="text-black   
            max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Left Logo */}
                {/* <img src={logo} alt="logo" width={120} height={24} /> */}
                <a href="#" className='font-bold text-2xl'>Chalatix</a>

                {/* center Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#works" className="hover:text-neutral-500">
                        Our works
                    </a>
                    <a href="#pricing" className="hover:text-neutral-500">
                        Services
                    </a>
                    <a href="#products" className="hover:text-neutral-500">
                        Products
                    </a>
                </div>

                {/* right btns */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="bg-black text-white
                    py-2 px-4 hover:bg-gray-500 transition">
                        Get In Touch
                    </a>
                </div>

                {/* hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-gray-900 focus:outline-none'
                        aria-label={isOpen ? "Open Menu" : "Close Menu"}>
                    {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
                    </button>
                </div>

            </div>

            {/* nav menu */}
            {isOpen && 
                (
                <div className="md:hidden  backdrop-blur-md border-b
                 p-4  mt-2">
                    <div className='flex flex-col space-y-4'>
                        <a href="#" className='text-neutral-900 hover:text-neutral-700'>
                            Our works
                        </a>
                        <a href="#" className='text-neutral-900 hover:text-neutral-700'>
                            Services
                        </a>
                        <a href="#" className='text-neutral-900 hover:text-neutral-700'>
                            Products
                        </a>
                    <a href="#" className="bg-gray-900 text-white
                    py-2 px-4  hover:bg-gray-700 transition">
                        Start Free Trial
                    </a>
                    </div>
                </div>
            )
            }
        </nav>
  )
}
