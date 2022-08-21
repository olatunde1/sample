import React from 'react'
import { BrowserRouter as Router,Route,Link, Routes} from "react-router-dom"
import Profile from './components/Profile'
import "./App.css"
import Billing from './components/Billing'
import Payer from './components/Payer'
import CompletePurchase from './components/CompletePurchase';
import PurchaseCompleted from './components/PurchaseCompleted'


function App()  {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="billing" element={<Billing />} />
      <Route path="payer" element={<Payer />} />
      <Route path="purchase" element={<PurchaseCompleted />}/>
    </Routes>
    
  )
  
}

export default App