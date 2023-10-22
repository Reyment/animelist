import React from 'react'

const HeaderMenu = ({title}) => {
  return (
    <div className='p-8'>
      <div className='text-color-primary text-2xl text-center font-bold'>{title}</div>
    </div>
  )
}

export default HeaderMenu