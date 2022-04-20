import React from 'react'
import "./formSearcher.css"
import iconArrow from "../../assets/icon-arrow.svg"

const FormSearcher = () => {
  return (
    <form>
        <div className='formSearcher__div'>
            <input type="text" />
            <button type='button'><img src={iconArrow} alt="iconArrow" /></button>
        </div>
        
    </form>
  )
}

export default FormSearcher