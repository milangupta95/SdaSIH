import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ props }) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
        // console.log(loginData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tokenn = "true";
        localStorage.setItem('token', tokenn);
        console.log(tokenn)
        navigate("/");

        // Handle form submission here
        // console.log(loginData);
    }

    return (
        <div>
            <section className="bg-indigo-100 dark:bg-indigo-100">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <span href="#" className="flex items-center mb-6 text-2xl font-semibold text-indigo-400 ">
                        <img className='w-[55px] h-[55px] border-r-[50%] mx-4' src='logo.png' alt='logo' />
                        Login as Admin
                    </span>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-100 dark:border-indigo-400">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-400 md:text-2xl dark:text-indigo">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-300 dark:text-indigo">Your email</label>
                                    <input type="email" name="email" id="email" onChange={handleChange} className="bg-indigo-50 border border-indigo-400 text-indigo-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-indigo dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-300 dark:text-indigo">Password</label>
                                    <input type="password" name="password" id="password" onChange={handleChange} className="bg-indigo-50 border border-indigo-400 text-indigo-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-indigo dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password" required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-primary-300 dark:bg-indigo-400 dark:border-indigo-400 dark:focus:ring-primary-600 dark:ring-offset-indigo-400" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-indigo-500 dark:text-indigo-300">Remember me</label>
                                        </div>
                                    </div>
                                    <span href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</span>
                                </div>
                                <button type="submit" className="w-full text-indigo bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-indigo-400 bg-indigo-400">Sign in</button>
                                <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                                    Don’t have an account yet? <span href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
