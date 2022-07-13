import React from 'react'
import { Deslizable } from './Deslizable';
import './stylesheet/SeleccionDeHistoria.css'

export const SeleccionDeHistoria = ({ showModal,selectView,selectHistory }) => {
  return (
    <div>
        <div className='deslizable-container'>

        <Deslizable
        showModal={showModal} 
        url={'hey'}
        texto={'Quiero hacer el recorrido completo'}
        id={'historiaLarga'}
        selectHistory={selectHistory}/>



        <div className="v-line">
        </div>


        <Deslizable
        showModal={showModal}  
        url={'busy'}
        texto={'Soy una persona ocupada, menos blablabla..'}
        id={'historiaCorta'}
        selectHistory={selectHistory}/>

      </div>
    </div>
  )
}
