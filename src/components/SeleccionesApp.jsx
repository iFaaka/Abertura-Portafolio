import { useState } from 'react';
import { Modal } from './Modal';
import { SeleccionDeHistoria } from './SeleccionDeHistoria';
import './stylesheet/SeleccionesApp.css'



export const SeleccionesApp = () => {
    const [typeOfView, settypeOfView] = useState('')
  const [typeHistory, setTypeHistory] = useState('')

  const selectHistory = (val) => {
    setTypeHistory(val)
    console.log(typeHistory)
  }

  const selectView = (val) => settypeOfView(val)

  
  
  
  
    return (
    
    <div className={`SeleccionesApp ${typeHistory !== '' && 'oculto'}`}>


    <Modal selectView={selectView} showModal={typeOfView}/>
    <SeleccionDeHistoria selectHistory={selectHistory} typeSelect={selectView} showModal={typeOfView}/>
    


    
  </div>
  )
}
