import React from 'react'
import BTCSvg from './BTCSvg'

const HomePageLeftPanel = () => {
    return (
        <div className='left-panel'>
            <div className="btc-link">
                <BTCSvg />
                <a>Jump start your portfolio</a>
            </div>
            <div>
                <h1>Jump start</h1>
                <h1>your crypto</h1>
                <h1>portfolio</h1>
            </div>
            <div>
                <p>Coinbase is the easiest place to buy and sell
                <br /> cryptocurrency. Sign up and get started today.</p>

            </div>
            <div className="emailpanel">
                <input className='emailtab' placeholder='Email Address'></input>
                <button className='getstarted'>GET STARTED</button>
            </div>
        </div>
    )
}

export default HomePageLeftPanel
