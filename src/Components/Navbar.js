import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './AuthContextProvider';
function Navbar() {
    let login = useContext(AuthContext);
    let navigate = useNavigate();


    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
        login.setIsLogin("false");
    }


    return (
        <nav className='px-2 bg-gray-200 flex justify-between items-center w-full h-[70px] shadow-md sticky top-0 z-[1000]'>
            <Link to={'/'}><div className='flex flex-row'>
                <img className='w-[65px] h-[65px]' src='logo.png ' alt="logo" />
                <Button>Home</Button>
            </div>
            </Link>
            <div className='space-x-4'>
                {login.isLogin === true ? <div className='space-x-2'>
                    <Button variant='contained'>
                        <Link to={'/studentform'}>Fill Form</Link>
                    </Button>
                    <Button variant = 'contained' onClick={handleClick}>
                        Logout
                    </Button>
                </div> :
                    <Button variant='contained'>
                        <Link to={'/login'}>Login As Admin</Link>
                    </Button>}
            </div>
        </nav >
    )
}

export default Navbar