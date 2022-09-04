import React, { useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Card from './Card';
import { BsChatRightText, BsCloudSun, BsCpu } from 'react-icons/bs';


const MainPage = ({ setMode, mode }) => {

    const data = [
        {
            title: 'Small Talk',
            desc: 'Ask him about his life,chat for hours without getting bored.',
            icon: <BsChatRightText size={35} />
        },
        {
            title: 'Weather Forecast Guy',
            desc: 'Provides weather conditions and details like temperature, humidity, and pressure.',
            icon: <BsCloudSun size={35} />
        },
        {
            title: 'Math Boi',
            desc: 'Provides responses for basic math queries.',
            icon: <BsCpu size={35} />
        },

    ]

    useEffect(() => {
        alanBtn({
            key: '8702a80362077e734805bbc79c0ba9bc2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'theme') {
                    setMode(commandData.mode);
                }
            }
        });
    }, [setMode])
    const classStyle = `w-full my-5 ${mode === 'dark' ? 'text-white' : 'text-black'} flex flex-col justify-start items-center pt-10`

    return (
        <div className={classStyle}>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-semibold text-3xl mb-20'>Ask Morty Anything</span>
                <div className='grid grid-col-1 md:grid-cols-3 lg:grid-col-4 gap-20'>
                    {data.map((data, i) => (
                        <Card key={i} data={data} mode={mode} />
                    ))}

                </div>
                <span className='font-semibold text-3xl my-20'>You can control the website</span>
                <p className='font-medium text-xl ' >Try saying : <code>Change to dark mode / light mode</code></p>
                <span className='font-semibold text-3xl my-20'>You can listen to jokes</span>
                <p className='font-medium text-xl ' >Try saying : <code>Let's play yo mama jokes</code></p>
                <span className='font-semibold text-3xl my-20'>And much more!</span>
                <p className='font-medium text-xl ' ><code>This app is under development</code></p>
            </div>
        </div>
    )
}

export default MainPage