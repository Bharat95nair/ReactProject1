import React from 'react'
// import userArr from './users.json'
import userArr from './users.js'

export default function userList() {
    let columns = Object.keys(userArr[0]);
    return (
    <>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    {columns.map((column,ind)=>{
                        return<th key={ind}>{column}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {userArr.map((user,ind)=>{
                    return<tr key={ind}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.address.city}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
  )
}
