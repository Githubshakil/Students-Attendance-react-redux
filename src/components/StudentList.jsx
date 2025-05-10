
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, toggleAttendance } from '../slices/counter/studentSlice'

const StudentList = () => {
    const [name, setName] = useState('')
    const [showSummary, setShowSummary] = useState(false)
    const students = useSelector((state) => state.students) // Access the students from the Redux store
    const dispatch = useDispatch()
    const handleAdd = () => {
        if (name.trim()) {           //trim() removes whitespace from both sides of a string
            dispatch(addStudent(name)) // Dispatch the addStudent action with the name
            setName('')           // Clear the input field after adding student
            setShowSummary(false); // Reset the summary when a new student is added
        }
    };

    const handleSubmit = () => {
        setShowSummary(true);

    }

    const presentCount = students.filter(s => s.present).length
    const absentCount = students.length - presentCount
  return (
    <div className='container'>
        <h2>Student Attendence</h2>

        <div className='form'>
            <input
            type='text'
            value={name}
            placeholder='Enter Student Name'
            onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAdd}>Add Student</button>
        </div>
            <table className='attendance-table'>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Attendance</th>
                </tr>
            </thead>
          
              <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>
                            <label className='switch'>
                                <input
                                type='checkbox'
                                checked={student.present}
                                onChange={() => dispatch(toggleAttendance(student.id))}
                            />
                            <span className='slider round'></span>
                            </label>
                        </td>
                        <td className='student-text'>
                            {student.present ? 'Present' : 'Absent'}
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>

          <button className='submit-btn' onClick = {handleSubmit}>Submit Attendance</button>

          {showSummary && (
            <div className='summary'>
                <p><strong>Present:</strong>{presentCount}</p>
                <p><strong>Absent:</strong>{absentCount}</p>
                
            </div>
          )

          }

    </div>
  )
}

export default StudentList