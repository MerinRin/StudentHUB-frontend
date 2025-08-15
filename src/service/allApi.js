import { commonAPI } from "./commonAPI"

const serverURL = "https://studenthub-0lvy.onrender.com";

//add job
export const addStudentAPI = async (reqBody)=>{
    return await commonAPI("POST", `${serverURL}/students`, reqBody)
}

//get all students
export const getAllStudentsAPI = async ()=>{
    return await commonAPI("GET", `${serverURL}/students`, "")
}

//delete job
export const deleteStudentsAPI = async (id)=>{
    return await commonAPI("DELETE", `${serverURL}/students/${id}`, "")
}

//edit student data
export const getEditDataAPI = async (id)=>{
    return await commonAPI("GET", `${serverURL}/students/${id}`, "")
}

//update Student
export const updateStudentAPI = async (id, reqBody)=>{
    return await commonAPI("PUT", `${serverURL}/students/${id}`, reqBody)
}