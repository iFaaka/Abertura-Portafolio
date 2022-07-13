import React from 'react'
import './stylesheet/Deslizable.css'


export const Deslizable = ({ texto,url,showModal,id,selectHistory }) => {
  return (
    <div 
    className={`${showModal == '' && 'blurer'} noblurer option-container`}
    onClick={() => selectHistory(id)}>
        <img className='deslizable-image' src={require(`../image/photo-${url}.png`)}/>
        <p>{texto}</p>
    </div>
  )
}
