import React from 'react'
import "./RatingsTable.css"
import logo from "./btclogo.png"
import logo1 from "./ethlogo.png"
import logo2 from "./btccash.png"
import logo3 from "./litecoinn.png"
import logo4 from "./chart.png"
const RatingsTable = () => {
    return (
        <section className="ratings-section">
            <table className="ratings-table">
                <thead className='tableHead'>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Chart</th>
                    <th>Trade</th>
                </thead>
                <tbody>
                    <tr className='btcTable'>
                     
                        <td>1</td>
                        <td> <img className='btcLogo' src ={logo} alt = 'logo'/>Bitcoin  BTC</td>
                        <td>GHS 288,113.87</td>
                        <td className='btcChange'>-3.25</td>
                        <td><img className='chartImg' src={logo4}></img></td>
                        <td>
                            <button className='btcButton'>Buy</button>
                        </td>
                    </tr>
                    <tr className='btcTable'>
                        <td>2</td>
                        <td><img className='btcLogo' src ={logo1} alt = 'logo1'/>Ethereum   ETH</td>
                        <td> GHS 22,191.0 </td>
                        <td className='btcChange'>-7.37</td>
                        <td><img className='chartImg' src={logo4}></img></td>
                        <td>
                            <button className='btcButton'>Buy</button>
                        </td>
                    </tr>
                    <tr className='btcTable'>
                        <td>3</td>
                        <td><img className='btcLogo' src ={logo2} alt = 'logo2'/>Bitcoin Cash  BTCH</td>
                        <td>GHS 13,780.10</td>
                        <td className='btcChange'>-3.73</td>
                        <td><img className='chartImg' src={logo4}></img></td>
                        <td>
                            <button className='btcButton'>Buy</button>
                        </td>
                    </tr>
                    <tr className='btcTable'>
                        <td>4</td>
                        <td><img className='btcLogo' src ={logo3} alt = 'logo3'/>Litecoin  LTC</td>
                        <td>GHS 7,320.32</td>
                        <td className='btcChange'>-4.1</td>
                        <td><img className='chartImg' src={logo4}></img></td>
                        <td>
                            <button className='btcButton'>Buy</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default RatingsTable
