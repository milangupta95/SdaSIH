import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const district = [
    {
        value: 'Ahmedabad',
        label: 'Ahmedabad',
    },
    {
        value: 'Vadodara',
        label: 'Vadodara',
    },
    {
        value: 'Kachchh',
        label: 'Kachchh',
    }
];

const gender = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Others',
        label: 'Others',
    }
];

const StudentForm = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        age: "",
        schoolName: "",
        class: "",
        district: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserInfo({
            ...userInfo,
            [id]: value,
        });
        console.log(userInfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate age is between 2 and 30
        const age = parseInt(userInfo.age);
        if (age < 2 || age > 30) {
            alert("Age must be between 2 and 30");
            return;
        }
        else {
            alert("Thanks! Data is added to the Database")
        }
        // Handle form submission here
        console.log(userInfo);
    }

    return (
        <section className="bg-indigo-100 dark:bg-indigo-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <span href="#" className="flex items-center mb-6 text-2xl font-semibold text-indigo-400 ">
                    <img className='w-[55px] h-[55px] border-r-[50%] mx-4' src='logo.png' alt='logo' />
                    Fill Dropout Student Data
                </span>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-100 dark:border-indigo-400">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6 flex items-center flex-col" onSubmit={handleSubmit}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="fullName"
                                        label="Student Full Name"
                                        multiline
                                        maxRows={4}
                                        style={{ width: "400px" }}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="age"
                                        label="Age"
                                        type="number"
                                        inputProps={{ min: "2", max: "30" }}
                                        style={{ width: "400px" }}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="schoolName"
                                        label="School Name"
                                        multiline
                                        maxRows={4}
                                        style={{ width: "400px" }}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="class"
                                        label="Class"
                                        multiline
                                        maxRows={4}
                                        style={{ width: "400px" }}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="district"
                                        select
                                        label="Select District"
                                        defaultValue=""
                                        style={{ width: "400px" }}
                                        onChange={handleChange}
                                    >
                                        {district.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField
                                        id="gender"
                                        select
                                        label="Select Gender"
                                        defaultValue=""
                                        style={{ width: "400px" }}
                                        onChange={handleChange}
                                    >
                                        {gender.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </Box>

                            <button type="submit" className="w-full text-indigo bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-indigo-400 bg-indigo-400">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentForm;
