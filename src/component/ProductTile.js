import React from 'react'

export const ProductTile = ({url,title,viewmore }) => {

  return (
    <div className='row crpt'>
      <img src={url} alt={title} btn={viewmore}/>
    </div>
  )
}