import React from 'react'

export default function ListDemo2() {
    const employeeDetails = [
    { id: 1, name: 'Anjali', department: 'Engineering', role: 'developer' },
    { id: 2, name: 'Rahul', department: 'HR', role: 'recruiter' },
    { id: 3, name: 'Meera', department: 'Sales', role: 'manager' },
    { id: 4, name: 'Arun', department: 'Engineering', role: 'tester' },
    { id: 5, name: 'Neha', department: 'Finance', role: 'analyst' }
    ];

  return (
    <div className="container mt-4">
      <h3>Employee Details</h3>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employeeDetails.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
