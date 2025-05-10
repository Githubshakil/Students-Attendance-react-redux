import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../slices/counter/studentSlice'

const StudentList = () => {
    const [name, setName] = useState('')
    const [showSummary, setShowSummary] = useState(false)
    const students = useSelector((state) => state.students)
    const dispatch = useDispatch()
    const handleAdd = () => {
        if (name.trim()) {
            dispatch(addStudent(name))
            setName('')
            setShowSummary(false)
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
            <table className='attendance-table'></table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Attendance</th>
                </tr>
            </thead>
          <table>
              <tbody>
                {students.map((student) => (
                    <span className='student-text'>
                        {student.present ? 'Present' : 'Absent'}
                    </span>
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