import React from 'react'
import {TableRow,TableCell} from '@mui/material'
function StudentTableRow(props) {
    const row = props.row;
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
            <TableCell>{row.StudentName}</TableCell>
            <TableCell>{row.Gender}</TableCell>
            <TableCell>{row.District}</TableCell>
            <TableCell>
                {row.SchoolName}
            </TableCell>
            <TableCell>{row.Age}</TableCell>
            <TableCell>{row.Class}</TableCell>
        </TableRow>
    )
}

export default StudentTableRow