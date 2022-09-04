import React, { useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Card from './Card';
import { Grid } from '@mui/material';
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
                <Grid container spacing={12}>
                    {data.map((data, i) => (
                        <Grid key={i} item>
                            <Card data={data} mode={mode} />
                        </Grid>
                    ))}

                </Grid>
            </div>
        </div>
    )
}

export default MainPage