const { json } = require("express");
const mongoose = require("mongoose");
const Student = require("../models/student")

// get all students
const getStudents = async (req, res) =>{
    const students = await Student.find({});
    res.status(200).json(students);
};

// //get a single student
// const getStudent = async (req, res) => {
//     const {id} = req.params;

//     if(!mongoose.Types.ObjectID.isValid(id)) {
//         return res.status(404).json({error: "No such student"});
//     }

//     const student = await Student.findById(id)
;

//     if(!student){
//         return res.status(404).json({error: "No Such Student"});
//     }

//     res.status(200).json(student);
// };
//create a new students
const createStudent = async (req,res)=> {
    const {name, place ,gender, email, placeOfBirth, dateOfBirth, studyGroups} =
    req.body;
    try {
        const student = await Student.create({
            name,
            place,
            gender,
            email,
            placeOfBirth,
            studyGroups,
        })
        res.status(200).json(student);
    } catch (error) {
       console.log('error',error);
    }

};

//delete a student
const deleteStudent = async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such a Student"});
    }

    try {
        const student = await Student.deleteOne({ "_id":id})
        res.status(200).json(student);
    } catch (error) {
       console.log('error',error);
    }

}

module.exports = {getStudents,createStudent,deleteStudent};