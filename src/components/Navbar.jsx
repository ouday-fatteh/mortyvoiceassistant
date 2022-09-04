import React, { useState } from 'react'
import { BsList, BsX } from 'react-icons/bs';


const menu = [{
    title: 'Home',
    link: './'
},
{
    title: 'About',
    link: './about'
},
{
    title: 'Contact',
    link: './contact'
}]
const Navbar = ({ mode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const classStyling = `w-full h-16 flex flex-row justify-between px-8 items-center ${mode === 'light' ? 'text-black' : 'text-white'} `;
    const menuStyling = `border-solid border rounded-2xl ${mode === 'light' ? 'border-gray-500' : 'border-sky-500'} hover:bg-sky-800 transition all ease-in-out px-3 cursor-pointer`;
    const mobileMenuStyling = `z-50 w-[80%] h-full backdrop-blur transition all ease-in-out fixed top-0 right-[-100%] ${menuOpen && '-translate-x-[100%]'} flex flex-col md:hidden lg:hidden`;
    const mobileMenuShadow = `z-50 w-[40%] h-full fixed top-0 left-0 ${menuOpen && 'translate-x-[100%]'}flex md:hidden lg:hidden bg-transparent`;

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <>
            <div className={classStyling}>
                <span className='font-semibold text-xl'>Morty Voice Assistant</span>
                <ul className='hidden flex-row w-[220px] justify-between md:flex lg:flex'>
                    {menu.map((item, index) => (
                        <li key={index} className={menuStyling}>{item.title}</li>
                    ))}
                </ul>
                <div className='flex md:hidden lg:hidden' onClick={toggleMenu}>
                    <BsList size={25} />
                </div>
            </div>

            <div className={mobileMenuStyling}>
                <div className='flex justify-end w-3/4 px-6 pt-4 mb-4 items-center h-12' onClick={toggleMenu}><BsX color={' white'} size={35} /></div>
                <ul className='text-white font-semibold px-6 text-lg flex flex-col gap-4'>
                    {menu.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div>
            {menuOpen && (
                <div className={mobileMenuShadow} onClick={toggleMenu}></div>
            )}


        </>
    )
}

export default Navbar