import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
    const [isLogin, setIsLogin] = useState("false")
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') === "true") {
            setIsLogin("true")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
        setIsLogin("false");
    }


    return (
        <nav className='px-2 bg-gray-200 flex justify-between items-center w-full h-[70px] shadow-md sticky top-0 z-[1000]'>
            <Link to={'/'}><div className='flex flex-row'>
                <img className='w-[65px] h-[65px]' src='logo.png ' alt="logo" />
                <Button>Home</Button>
            </div>
            </Link>
            <div className='space-x-4'>
                {isLogin === "true" ? <div>
                    <Button>
                        <Link to={'/studentform'}>Fill Form</Link>
                    </Button>
                    <Button onClick={handleClick}>
                        Logout
                    </Button>
                </div> :
                    <Button>
                        <Link to={'/login'}>Login</Link>
                    </Button>}
            </div>
        </nav >
    )
}

export default Navbar