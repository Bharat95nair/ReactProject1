import React from 'react'

export default function ListDemo1() {
    let stateNames = ['Odisha','Karnataka','Kerala','Tamil Nadu','Andhra Pradesh']
    return (
    <>
        <h3>State List</h3>
        <ol>
            {stateNames.map((stateName,index)=>{
                return <li key={index}>{stateName}</li>
            })}
        </ol>

        <h3>State List in dropdown</h3>
        <select>
            {stateNames.map((stateName,index)=>{
                return <option key={index}>{stateName}</option>
            })}
        </select>


        <h3>State List in Datalist</h3>
        <input list = "stateNames" name="" id =""></input>
        <datalist id ="stateNames">
            {stateNames.map((stateName,index)=>{
                return <option key={index} value ={stateName}></option>
            })}
        </datalist>

    </>

  )
}
