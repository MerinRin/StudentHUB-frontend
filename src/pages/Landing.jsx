import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ManageStudent from '../components/ManageStudent'

function Landing() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container-fluid d-flex flex-column p-md-5 px-3 justify-content-center align-items-center">
                <div>
                    <img style={{ height: "240px" }} src="/logo.png" alt="" />
                </div>
                <h2 className='fw-bold mt-5 fs-1'>THE STUDENT HUB</h2>
                <p className='text-center px-md-5 px-3 py-2'>StudentHub is your all-in-one platform for managing every aspect of student data with ease and efficiency. Designed for schools, teachers, and administrators, it allows you to store and update student profiles, track attendance, record grades, and monitor performance - all from one simple, user-friendly dashboard. Whether you’re organizing class lists, keeping contact details up to date, or generating progress reports, StudentHub makes the process faster, more accurate, and completely secure with its intuitive interface and powerful features.</p>
                <div className='d-flex gap-4'>
                    <span className='btn btn-warning' variant="warning"><ManageStudent/></span>
                    <Button variant="warning" onClick={() => navigate("/dashboard")}>View Students</Button>
                </div>
            </div>
        </>
    )
}

export default Landing