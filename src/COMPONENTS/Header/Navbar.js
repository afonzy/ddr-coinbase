import React from 'react';
import './Navbar.css';
import logo from './cb.svg'

const Navbar = () => {
    return (
        <header className='head1'>
            <div className='navhead'>
                {/* <div className='navhead1'>
                    <div className='Coinstartborder'>
                        <div className='coinbaseborder'>
                            <a href="#!" className='cb'>
                                
                            </a>
                            <nav className='Navtags'>
                                <a className='Prices' title="Prices" data-element-handle ='main-nav-link-prices' href="/price">
                                    <div className = 'prices1'>Price</div>
                                </a>

                                <div className='signintab'>
                                    <nav className='prices'>

                                    </nav>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div> */}

                <div className="div1">
                <img src={logo} alt="logo" className='cbimage' />
                </div>
                <div className="div2">
                    <ul className="nav-links">
                        <li>Price</li>
                        <li>Learn</li>
                        <li>Individual</li>
                        <li>Business</li>
                        <li>Business</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div className="buttons-div">
                    <span>Sign in</span>
                    <button className='gsButton'>Get Started</button>
                </div>

            </div>
        </header>

        
    );
}
export default Navbar;