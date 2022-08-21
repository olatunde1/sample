import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import tick from "../components/img/tick.png";

const PurchaseCompleted = () => {
    return (
        <div className='container'>
            <div className='app-wrapper'>
                
                <form className='form-wrap'>
                    <div className='success'>
                        <img src={tick}></img>
                    </div>
                    <p className='purchaseCompleted'>Purchase Completed</p>
                    <p className='emailDetails'>Please check your email for details concerning this transaction</p>
                    <p className='returnHome'><NavLink to="/">Return Home</NavLink></p>
                    
                   
                   
                </form>
                
            </div>
        </div>
    );
 
}

export default PurchaseCompleted