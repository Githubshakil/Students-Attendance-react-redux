import React, { use } from 'react'
import { useSelector } from 'react-redux'

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
    }
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

    </div>
  )
}

export default StudentList