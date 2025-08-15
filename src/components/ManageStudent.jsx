import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addStudentAPI,
  getEditDataAPI,
  updateStudentAPI,
} from "../service/allApi";
import { toast } from "react-toastify";

function ManageStudent({ isEdit, studentId, setIsStudentDeleted }) {
  //console.log(studentId);

  //states and methods from modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    if (isEdit) {
      await handleEditStudent();
    }
    setShow(true);
  };

  //my states and methods
  const [studentData, setStudentData] = useState({
    name: "",
    admission: "",
    course: "",
    phone: "",
    email: "",
  });

  // Handle input data

  const handleChange = (e) => {
    setStudentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddStudent = async () => {
    if (
      !studentData.name ||
      !studentData.admission ||
      !studentData.course ||
      !studentData.phone ||
      !studentData.email
    ) {
        toast.error("Fill all fields!");

    } else {
      try {
        const result = await addStudentAPI(studentData);
        console.log(result);
        handleClose();
        setStudentData({
          name: "",
          admission: "",
          course: "",
          phone: "",
          email: "",
        });

        toast.success("Student added successfully!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditStudent = async () => {
    try {
      const result = await getEditDataAPI(studentId);
      setStudentData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateStudent = async () => {
    if (
      !studentData.name ||
      !studentData.admission ||
      !studentData.course ||
      !studentData.phone ||
      !studentData.email
    ) {
          toast.error("Fill all fields!");

    } else {
      try {
        const result = await updateStudentAPI(studentId, studentData);
        console.log(result);
        handleClose();
        setIsStudentDeleted((prev) => !prev);
        toast.success("Student data updated successfully!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {isEdit ? (
        <span onClick={handleShow}>Edit</span>
      ) : (
        <span onClick={handleShow}>Add Student</span>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {isEdit ? (
            <Modal.Title>Edit Student Details</Modal.Title>
          ) : (
            <Modal.Title>Add Student Details</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label text-capitalize">Full Name</label>
            <input
              name="name"
              value={studentData.name}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter student name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-capitalize">
              Admission Number
            </label>
            <input
              name="admission"
              value={studentData.admission}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="eg: NIT5403983"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-capitalize">Course</label>
            <input
              name="course"
              value={studentData.course}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="eg: Computer Science"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-capitalize">Contact Number</label>
            <input
              name="phone"
              value={studentData.phone}
              onChange={handleChange}
              type="number"
              className="form-control"
              placeholder="eg: +91 1234567890"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-capitalize">Email ID</label>
            <input
              name="email"
              value={studentData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="eg: abc@gmail.com"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {isEdit ? (
            <Button onClick={handleUpdateStudent} variant="warning">
              Update
            </Button>
          ) : (
            <Button onClick={handleAddStudent} variant="warning">
              Add Student
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageStudent;
