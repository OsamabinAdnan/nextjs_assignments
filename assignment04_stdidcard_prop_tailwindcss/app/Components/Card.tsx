import React from 'react'

interface Tprops {
    name:string,
    age:number,
    rollNo:number,
    Class:string,
}
export default function Card(props:Tprops) {
  return (
    <div>
        <h1 className='text-center underline'><b>Student Detail</b></h1>
        <br />
        <h2><b>Name:</b> {props.name}</h2>
        <h2><b>Age:</b> {props.age}</h2>
        <h2><b>Roll Number:</b> {props.rollNo}</h2>
        <h2><b>Class:</b> {props.Class}</h2>
    </div>
  )
}
