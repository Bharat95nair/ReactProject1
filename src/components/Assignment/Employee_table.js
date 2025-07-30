import React from 'react'




export default function EmployeeTable({ employees,openModal,deleteEmployee }) {
  return <>
    <table className='table table-bordered table striped mt-2'>
      <tbody>
        {employees.map(emp => {
          return <tr key={emp.eId}>
            <td>{emp.eId}</td>
            <td>{emp.name}</td>
            <td>{emp.sal}</td>
            <td>{emp.gender}</td>
            <td>
              <button className='btn btn-primary mx-1' onClick={()=>openModal(emp)}>View</button>
              <button className='btn btn-danger mx-1' onClick={()=>deleteEmployee(emp.eId)}>Delete</button>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}