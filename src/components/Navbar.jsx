import React from 'react'



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
    console.log(mode)
    const classStyling = `w-full h-16 flex flex-row justify-between px-8 items-center ${mode === 'light' ? 'text-black' : 'text-white'} `;
    const menuStyling = `border-solid border rounded-2xl ${mode === 'light' ? 'border-gray-500' : 'border-sky-500'} px-3 cursor-pointer`;
    return (
        <div className={classStyling}>
            <span className='font-semibold text-xl'>Morty Voice Assistant</span>
            <ul className='flex flex-row w-[220px] justify-between'>
                {menu.map((item, index) => (
                    <li key={index} className={menuStyling}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar