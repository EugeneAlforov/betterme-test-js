import React, { useEffect, useState } from 'react'

const timeConvere = (timer) => {
    const min = Math.floor(timer / 60);
    const sec = timer - min * 60;


    return `0${min}:${sec <= 9 ? `0${sec}` : sec}`;
} 

export const Timer = () => {
    const [timer, setTimer] = useState(10 * 60 - 1)


    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)
    }, [timer])

    return (
        <>
            <h1>{timeConvere(timer)}</h1>
        </>
    )
}