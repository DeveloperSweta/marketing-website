import React from 'react'

export const ProductTile = ({url,title}) => {

  return (
    <div className='row crpt'>
      <img src={url} alt={title}/>
    </div>
  )
}