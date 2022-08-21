import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Link, Routes} from "react-router-dom"
import Profile from './components/Profile'
import "./App.css"
import Billing from './components/Billing'
import Payer from './components/Payer'
import PurchaseCompleted from './components/PurchaseCompleted'


const App = () =>  {
const [currentStep,setCurrentStep] = useState(0)
  const componentDisplay=() =>{
    switch (currentStep) {
      case 0: return <Profile
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />    
      case 1: return <Billing />
      case 2: return <Payer /> 
      case 3: return <PurchaseCompleted /> 

      default:
        break;
    }
  }
  return (
    <>
    {componentDisplay()}
    </>
    // <Routes>
    //   <Route path="/" element={<Profile />} />
    //   <Route path="billing" element={<Billing />} />
    //   <Route path="payer" element={<Payer />} />
    //   <Route path="purchase" element={<PurchaseCompleted />}/>
    // </Routes>
    
  )
  
}

export default App