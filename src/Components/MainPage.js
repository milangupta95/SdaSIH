import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import StudentTable from './StudentTable';
import Charts from './Charts';
function MainPage() {
    const [currentPage, setCurrentPage] = useState("table");
    return (
        <div>
            <div className='mb-2 flex items-center justify-center p-4'>
                <ToggleButtonGroup
                    color="primary"
                    value={currentPage}
                    exclusive
                    aria-label="Platform"
                >
                    <ToggleButton value="table" onClick={() => setCurrentPage("table")}>Table</ToggleButton>
                    <ToggleButton value="visualization" onClick={() => setCurrentPage("visualization")}>Visualization</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                {
                    currentPage === 'table' ? <StudentTable></StudentTable>
                        : <Charts />
                }
            </div>

        </div>
    )
}

export default MainPage