import React, { use, useEffect, useState } from 'react'
import StudentCard from '../components/StudentCard';
import { getAllStudentsAPI } from '../service/allApi';
import ManageStudent from '../components/ManageStudent';
import { Button } from 'react-bootstrap';

function Dashboard() {

  const [studentData, setStudentData] = useState({})
  const [isStudentDeleted, setIsStudentDeleted] = useState()
  
  const getAllStudents = async () => {
    try {
      const result = await getAllStudentsAPI()
      setStudentData(result.data)
      setIsStudentDeleted(result)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllStudents();
  }, [isStudentDeleted])

  return (
    <>
      <div className="container-fluid d-flex flex-wrap"  style={{ gap: "90px", paddingInline: "120px", paddingBlock:"50px"}}>
        {
          studentData?.length > 0 ? (
            studentData.map((student,i) => (
              <StudentCard studentData={student} setIsStudentDeleted={setIsStudentDeleted} key={i}/>
            ))
          ) :
          <div className='d-flex container-fluid align-items-center flex-column'>
            <h3 className='p-3'>No Student Details Found!</h3>
            <p>Add a student to get started.</p>
            <Button variant='warning'><ManageStudent setIsStudentDeleted={setIsStudentDeleted}/></Button>
          </div>
            
        }
      </div>
    </>
  )
}

export default Dashboard