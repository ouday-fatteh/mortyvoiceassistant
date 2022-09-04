import React from 'react'

const Footer = ({ mode }) => {
    const classStyle = `fixed bottom-0 w-full h-10 font-medium ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'} flex justify-center items-center`
    return (
        <div className={classStyle}>
            <span>Created by Ouday Fatteh</span>
        </div>
    )
}

export default Footer