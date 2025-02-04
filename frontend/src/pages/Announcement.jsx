import React from 'react'
import Header from '../layout/Header/Header'
import Background from '../layout/Background'

const Announcement = () => {
  return (
    <div className='h-screen'>
      <Header opacity={false}/>
      <Background opacity={true}/>
    </div> 
  )
}

export default Announcement