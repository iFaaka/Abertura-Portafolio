import React from 'react'
import './stylesheet/Deslizable.css'
import './stylesheet/Mobile/DeslizableResponsive.css'

export const Deslizable = ({ texto,url,showModal,id,selectHistory }) => {
  
  const handleClick = (val) => {
    

    setTimeout(() => {
      selectHistory(val)
    }, 1500);
  }
  
  return (
    <div 
    className={`${showModal == '' ? 'blurer' : ''} noblurer option-container`}
    onClick={() => handleClick(id)}>
        <img className='deslizable-image' src={require(`../image/photo-${url}.png`)}/>
        <p className='deslizable-text'>{texto}</p>
   
    </div>
  )
}
