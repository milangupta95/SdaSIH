import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='px-2 bg-gray-200 flex justify-between items-center w-full h-[70px] shadow-md sticky top-0 z-[1000]'>
            <div>
                <img className='w-[65px] h-[65px]' src='logo.png' />
            </div>
            <div className='space-x-4'>
                <Button variant='contained' href='/login'>
                    Login as Admin
                </Button>
            </div>
        </nav>
    )
}

export default Navbar