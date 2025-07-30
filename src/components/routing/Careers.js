import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
  return (
    <>
        <h3> This is Careers component </h3>
        <hr/>
        <div className='row'>
            <div className='col-sm-3'>
               <Link to="permanent" className='m-3'>Permanent Jobs</Link>
               <Link to="contract">Contract Jobs</Link>
            </div>
            <div className='col-sm-9'>
                <Outlet></Outlet>         {/* container  where we can display the details  */}
                        

            </div>
        </div>
    </>
  )
}
