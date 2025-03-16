import React from 'react'
import ShowHi from './ShowHi.jsx'

function ShowHey() {
  return (
    <>
        <ShowHi/>
        {/* <h1 style="color:red ; text-align:center">Hey Hey Hey</h1> */}
        <h1 style={{color:"red" , textAlign:"center"}}>Hey Hey Hey</h1>
        <ShowHi/>    
    </>
  )
}

export default ShowHey