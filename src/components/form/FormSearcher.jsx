import React,{useState} from 'react'
import "./formSearcher.css"
import iconArrow from "../../assets/icon-arrow.svg"

const FormSearcher = ({ipDirection, setIpDirection}) => {

  const [value,setValue] = useState()

  const handleInputChange = (event) =>{
    setValue(event.currentTarget.value)
  }

  const sendData = (event) =>{
    setIpDirection(value)
    console.log("hola" + ipDirection)
  }

  return (

    <div className='formSearcher__div'>
      <input type="text" name='idform' onChange={handleInputChange} />
      <button type='submit' onClick={sendData}><img src={iconArrow} alt="iconArrow" /></button>
    </div>
        
  )
}

export default FormSearcher