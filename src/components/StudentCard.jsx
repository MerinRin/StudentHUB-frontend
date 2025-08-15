import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap'
import ManageStudent from './ManageStudent';
import { deleteStudentsAPI } from '../service/allApi';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";

function StudentCard({ studentData, setIsStudentDeleted }) {

  //modal states and methods
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //my states and methods
  const handleDelete = async (id) => {
    try {
      console.log(id);
      const result = await deleteStudentsAPI(id)
      setIsStudentDeleted(result)
      toast.success("Student has been deleted!");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/497/579/original/male-student-icon-design-vector.jpg" />
        <Card.Body>
          <Card.Title><span className='fw-bold'>Name:</span> {studentData.name}</Card.Title>
          <Card.Text><span className='fw-bold'>ID : {studentData.admission}</span></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><span className='fw-bold'>Course:</span> {studentData.course}</ListGroup.Item>
          <ListGroup.Item><span className='fw-bold'>Phone:</span> {studentData.phone}</ListGroup.Item>
          <ListGroup.Item><span className='fw-bold'>Email:</span> {studentData.email}</ListGroup.Item>
        </ListGroup>
        <Card.Body className='d-flex justify-content-between'>
          <Button style={{ width: "90px" }} variant="warning"><ManageStudent isEdit={true} studentId={studentData?.id} /></Button>
          <Button style={{ width: "90px" }} variant="danger" onClick={handleShow}>Delete</Button>
        </Card.Body>
      </Card>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this student ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will remove all associated data!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(studentData?.id)}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default StudentCard