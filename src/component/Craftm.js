import React from 'react'
import '../style/Craftm.css'
import book from '../img/book.jpeg'
import book2 from '../img/book2.jpeg'

function Craftm() {
  return (
    <div>
      <div className='container'>
        <div className='craftmn'>
        <img src={book}  className='imag'/>
        <img src={book2}  className='imag2'/>
           <div className='yim2'><p className='yim'>Your Imagination Meets</p><p className='yim'>Our Craftsmanship</p>
           <p>Wrap It in Style, Print It with Love</p>
           <a href='#' className='oprod'>Our Products</a></div> 
        </div>
      </div>
    </div>
  )
}

export default Craftm