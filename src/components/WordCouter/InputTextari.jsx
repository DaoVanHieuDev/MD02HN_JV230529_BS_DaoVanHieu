import React,{useState} from 'react'

function InputTextari({onChange}) {

  return (
    <div className='text'> 
    <textarea  onChange={onChange} cols="30" rows="10" placeholder='Enter/Paste Your Text Here'>
    </textarea>
    </div>
  )
}

export default InputTextari