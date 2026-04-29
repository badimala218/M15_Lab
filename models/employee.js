import mongoose from 'mongoose'
const EmployeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    extension: {type: Number, required: true},
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2.3}})+$/, 
            'Please enter a valid email address']
    },
    title: String,
    dateHired: {type: Date, default: Date.now},
    currrentlyEmployed: Boolean
})
export default ('Employee', EmployeeSchema)