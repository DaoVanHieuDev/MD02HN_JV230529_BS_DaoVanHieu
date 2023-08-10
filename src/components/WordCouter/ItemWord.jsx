import React,{useState} from 'react'

function ItemWord({count,letter}) {



  return (
    <div className='itemWord'> 
   
    <div className='wordItem' >
      <img src="/images/blog.png" alt="" />
      <p>Word </p> <br /> 
      <p className='hi'> {count} </p>
       </div>   

       <div className='wordItem' >
      <img src="/images/writing.png" alt="" />
      <p>Letter </p> <br /> 
      <p className='hi'> {letter}  </p>
       </div>   

          <div className='wordItem' >
      <img src="/images/magazine (1).png" alt="" />
      <p>Paragraph </p> <br /> 
      <p className='hi'> </p>
       </div>   

    </div>

  )
}

export default ItemWord