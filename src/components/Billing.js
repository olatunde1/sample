import React from 'react'
import { Link,NavLink } from 'react-router-dom';


const Billing = () => {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Complete your Purchase</h2>
            </div>
            <div className='Nav'>
                <p className='NavP'><NavLink to="/">Personal Info</NavLink></p>
                <p className='NavP'><NavLink to="/billing">Billing Info</NavLink></p>
                <p className='NavP'><NavLink to="/payer">Confirm Payment</NavLink></p>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Name on Card</label>
                    <input className='input' placeholder='Name on card' type="text" name='name' />
                </div>
                <div className='cardtype'>
                <label className='label'>Card Type:</label>
                        <select className='cardtypedetails'>
                            <option value="abia">Visa</option>
                            <option value="umaya">Verve</option>
                            <option value="adamawa">Mastercard</option>
                        </select>
                </div>
                
                <div className='details'>
                    <div className='cardDetails'>
                        <label className='label'>Card details</label>
                        <input className='input' placeholder='44960 &nbsp; 4423 &nbsp; 2341 &nbsp; 1237' type="text" name='address1' />
                    </div>
                    <div className='expiryDate'>
                        <label className='label'>Expiry date</label>
                        <input className='input' placeholder='04 &nbsp;/&nbsp; 23' type="text" name='address2'/>
                    </div>
                    <div className='cvv'>
                        <label className='label'>CVV</label>
                        <input className='input' placeholder='923' type="text" name='address2'/>
                    </div>
                </div>
                <div>
                <Link to="/payer"><button className='next'>Next</button></Link>
                    <Link to="/"><button className='cancelpayment'>Cancel Payment</button></Link>
                </div>

            </form>
        </div>
    </div>
  );
}

export default Billing