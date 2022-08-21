import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import Line from "../components/img/Line.png";

const Payer = () => {
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
                <form className='form-wrap'>
                    <div className='priceTag'>
                        <p>Item Name</p>
                        <p>Price</p>
                    </div>
                    <div className='dataScience'>
                        <p>Data science and usability</p>
                        <p>50,000</p>
                    </div>
                    <div className='shippingRate'>
                        <p className='shipping'>Shipping</p>
                        <p>0.00</p>
                    </div>
                    {/* <img src={Line}></img> */}
                    <input className='inputTotal' placeholder='Total' type="text" name='name' />
                </form>
                <div>
                    <Link to="/purchase"><button className='next'>Pay</button></Link>
                    <Link to="/"><button className='cancelpayment'>Cancel Payment</button></Link>
                </div>
            </div>
        </div>
    );
 
}

export default Payer