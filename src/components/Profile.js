import React from 'react'
import { Link,NavLink } from 'react-router-dom';



const PersonalInfo = ({ setCurrentStep,  currentStep }) => {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Complete your Purchase</h2>
            </div>
            <div className='Nav'>
                <p className='NavP active'>Personal Info</p>
                <p className='NavP'>Billing Info</p>
                <p className='NavP'>Confirm Payment</p>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Name</label>
                    <input className='input' placeholder='Name' type="text" name='name' />
                </div>
                <div className='email'>
                    <label className='label'>Email Address</label>
                    <input className='input' placeholder='Email' type="email" name='emailaddress' />
                </div>
                <div className='address1'>
                    <label className='label'>Address 1</label>
                    <input className='input' placeholder='Address 1' type="text" name='address1' />
                </div>
                <div className='address2'>
                    <label className='label'>Address 2</label>
                    <input className='input' placeholder='Address 2' type="text" name='address2'/>
                </div>
                <div className='venue'>
                    <div className='local'>
                        <label className='label'>local Government</label>
                        <input className='localgovernment' placeholder='local government' type="text" name='localgovernment' />
                    </div>
                    <div className='state'>
                        <label className='label'>State</label>
                        <select className='stateDetails'>
                            <option value="abia">Abia</option>
                            <option value="umaya">umayah</option>
                            <option value="adamawa">Adamawa</option>
                            <option value="yola">Yola</option>
                        </select>
                    </div>
                </div>
                <div>
                <button className='next' onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
                    <button className='cancelpayment'>Cancel Payment</button>
                </div>

            </form>
        </div>
    </div>
  );
}

export default PersonalInfo