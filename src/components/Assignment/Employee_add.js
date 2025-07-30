import React, { useState } from 'react'

export default function EmployeeAdd({ addEmployee }) {

  const emptyEmpObj = { eId: 0, name: '', gender: '', sal: 0 };
  const [empObj, setEmpObj] = useState(emptyEmpObj);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEmpObj({ ...empObj, [name]: value });
  }

  return <>
    <h4>Employee Add</h4>
    <form className='border border-2 rounded-2 p-2'>
      <div className='mt-2'>
        Emp Id:
        <input name='eId' onChange={(evt) => changeHandler(evt)} />
      </div>
      <div className='mt-2'>
        Name:
        <input name='name' onChange={(evt) => changeHandler(evt)} />
      </div>
      <div className='my-2'>
        Gender:
        <input name='gender' onChange={(evt) => changeHandler(evt)} />
      </div>
      <div className='mt-2'>
        Salary:
        <input name='sal' onChange={(evt) => changeHandler(evt)} />
      </div>
      <button className='btn btn-primary mt-2' onClick={(e) => { e.preventDefault(); addEmployee(empObj);}}>Add Employee</button>

      <pre>
        {/* {JSON.stringify(empObj)} */}
      </pre>
    </form>
  </>
}