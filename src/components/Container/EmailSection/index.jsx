import React, { useState } from 'react'
// import Button from '../../common/Button'
import './styles.css'

export default function EmailSection (props){
    const [userEmail, setUserEmail] = useState('')
    const [showInput, setShowInput] = useState(false)

    return (<div className={'email-section-container'}>
        <div className={'left-block'}>
            {/* <Button onClickCallback={()=>setShowInput(true)} /> */}
            <h2>Get Your <span>Personalized</span> Plan</h2>
            { showInput && <input value={userEmail} onChange={ e => setUserEmail(e.target.value)} />}
            <button onClick={showInput ? () => window.localStorage.setItem('email', userEmail) : () => setShowInput(true)}>Test yout plan</button>
        </div>
        <div className={'right-block'}>
            <img src={"/phoneImage.png"} alt={''}/>
        </div>
    </div>)
}