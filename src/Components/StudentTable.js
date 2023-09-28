import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import StudentTableRow from './StudentTableRow'
import { exportToExcel } from 'react-json-to-excel'
import { useState } from 'react';
import { Button, InputLabel, Select, FormControl, MenuItem } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mockData } from './mockData';
const columns = [
    {
        id: 'sname',
        label: 'Student Name',
        minWidth: 170
    },
    {
        id: 'Gender',
        label: 'Gender',
        minWidth: 80
    },
    {
        id: 'District',
        label: "District",
        minWidth: 140
    },
    {
        id: 'scname',
        label: 'School Name',
        minWidth: 140,
    },
    {
        id: 'Age',
        label: 'Age',
        minWidth: 80,
    },
    {
        id: 'class',
        label: 'Class',
        minWidth: 80
    }
];



function applyfilter(data, district, gender, ageGroup, standard) {
    let filteredData = data;
    if (district !== "any") {
        filteredData = filteredData.filter((data) => data.District === district)
    }

    if (gender !== "any") {
        filteredData = filteredData.filter((data) => data.Gender === gender);
    }

    if (ageGroup !== "any") {
        let ages = ageGroup.split("-");
        let stAge = (Number)(ages[0]);
        let endAge = (Number)(ages[1]);
        filteredData = filteredData.filter((data) => (data.Age >= stAge && data.Age <= endAge));
    }

    if (standard !== "any") {
        filteredData = filteredData.filter((data) => {
            return (data.Class === standard)
        });
    }
    return filteredData;
}

export default function StudentTable() {
    const [district, setDistrict] = useState("any");
    const [gender, setGender] = useState("any");
    const [ageGroup, setAgeGroup] = useState("any");
    const [standard, setStandard] = useState("any");
    let filteredData = applyfilter(mockData.students, district, gender, ageGroup, standard);

    const handleDownloadButtonClick = () => {
        exportToExcel(filteredData, 'Students');
    }
    return (
        <div className='z-[-170]' id="table">
            <div className='md:p-2 space-y-2 md:space-y-0 flex md:flex-row flex-col md:items-center md:justify-between  shadow-md bg-white mt-4 rounded-lg'>
                <div className='space-x-4 flex md:flex-row flex-col md:space-y-0 space-y-4'>
                    <FormControl className='w-[150px]'>
                        <InputLabel>District</InputLabel>
                        <Select
                            value={district}
                            label="Vehicle Type"
                            onChange={(e) => setDistrict(e.target.value)}
                            size='small'
                        >
                            <MenuItem value={"any"}>Any</MenuItem>
                            <MenuItem value={"Vadodara"}>Vadodara</MenuItem>
                            <MenuItem value={"Kachchh"}>Kachchh</MenuItem>
                            <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className='w-[150px]'>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            value={gender}
                            label="Speed Violation"
                            onChange={(e) => setGender(e.target.value)}
                            size='small'
                        >
                            <MenuItem value={"any"}>Any</MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className='w-[150px]'>
                        <InputLabel>Age Group</InputLabel>
                        <Select
                            value={ageGroup}
                            label="Age Group"
                            onChange={(e) => setAgeGroup(e.target.value)}
                            size='small'
                        >
                            <MenuItem value={"any"}>Any</MenuItem>
                            <MenuItem value={"0-5"}>0-5</MenuItem>
                            <MenuItem value={"5-10"}>5-10</MenuItem>
                            <MenuItem value={"10-15"}>10-15</MenuItem>
                            <MenuItem value={"15-20"}>15-20</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className='w-[150px]'>
                        <InputLabel>Standard</InputLabel>
                        <Select
                            value={standard}
                            label="Age Group"
                            onChange={(e) => setStandard(e.target.value)}
                            size='small'
                        >
                            <MenuItem value={"any"}>Any</MenuItem>
                            <MenuItem value={"1st"}>1</MenuItem>
                            <MenuItem value={"2nd"}>2</MenuItem>
                            <MenuItem value={"3rd"}>3</MenuItem>
                            <MenuItem value={"4th"}>4</MenuItem>
                            <MenuItem value={"5th"}>5</MenuItem>
                            <MenuItem value={"6th"}>6</MenuItem>
                            <MenuItem value={"7th"}>7</MenuItem>
                            <MenuItem value={"8th"}>8</MenuItem>
                            <MenuItem value={"9th"}>9</MenuItem>
                            <MenuItem value={"10th"}>10</MenuItem>
                            <MenuItem value={"11th"}>11</MenuItem>
                            <MenuItem value={"12th"}>12</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Button variant='outlined' onClick={
                    handleDownloadButtonClick
                }>
                    <FileDownloadIcon />
                </Button>
            </div>
            <Paper className='mt-5' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ minHeight: 550, maxHeight: 550 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                filteredData.map((row) => {
                                    return (
                                        <StudentTableRow row={row} />
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}