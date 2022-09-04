import React from 'react';


const Card = ({ data: { title, desc, icon }, mode }) => {
    const classStyle = `w-[250px] h-[250px] rounded ${mode === 'dark' ? 'bg-slate-800' : 'bg-slate-300'} flex flex-col justify-between py-8 px-3 transition all ease-in-out border-solid border-sky-500 border items-center hover:drop-shadow-[0px_0px_20px_rgba(14,165,233,0.55)]`
    return (
        <div className={classStyle}>
            <span className='font-medium text-xl'>{title}</span>
            {icon}
            <p>{desc}</p>
        </div>
    )
}

export default Card