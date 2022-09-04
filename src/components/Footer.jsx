import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import "./stylesFix.css";

const Footer = ({ mode }) => {
    const classStyle = `z-50 fixed bottom-0 w-full h-20 font-medium ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'} flex flex-col justify-evenly items-center`;

    const populate = () => {
        const p = document.getElementById('four');
        p.innerText = '+216 56 090 266'
    }
    return (
        <div className={classStyle}>
            <span>Created by Ouday Fatteh</span>
            <div className='flex justify-center items-center gap-6'>
                <a href="https://www.github.com/ouday-fatteh" target={'_blank'} rel="noreferrer"><BsGithub size={20} className='cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/ouday-fatteh-ba1968163/" target={'_blank'} rel="noreferrer"><BsLinkedin size={20} /></a>
                <a href="https://www.facebook.com/idle.beez" target={'_blank'} rel="noreferrer"><BsFacebook size={20} /></a>
                <span className='relative flex items-center' id="one" onMouseOver={populate}>
                    <BsWhatsapp size={20} id="three" className='z-10' />
                    <span id="two" className='transition-all ease-in-out absolute left-[-5px] bg-slate-200 h-6'>
                        <p id="four"></p>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Footer