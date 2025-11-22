import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 bg-blue-950 text-white'>
        <div className='flex gap-8'>
            <div>Home</div>
            <div>About</div>
            <div>Resume</div>
            <div>Services</div>
            <div>Portfolio</div>
            <div>Contact</div>
        </div>
        <div className='flex gap-4'>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Linkedin</div>
        </div>
    </div>
  )
}

export default Navbar