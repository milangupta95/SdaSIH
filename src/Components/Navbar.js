import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
function Navbar() {
    return (
        <div className='px-2 flex justify-between items-center w-full h-[70px] shadow-lg'>
            <div>
                <img className='w-[65px] h-[65px]' src='logo.png' />
            </div>
            <div className='space-x-4'>
                <Button>
                    <a href='#table'>Table</a>
                </Button>
                <Button>
                    <a href='#charts'>Charts</a>
                </Button>

            </div>
        </div>
    )
}

export default Navbar