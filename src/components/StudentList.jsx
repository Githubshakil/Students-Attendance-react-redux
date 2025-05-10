import React from 'react'

const StudentList = () => {
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

    </div>
  )
}

export default StudentList