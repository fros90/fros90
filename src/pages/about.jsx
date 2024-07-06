import React from 'react'
import { useNavigate } from 'react-router-dom'
function about (){
  const  navigate = useNavigate();





  return (
    <div>
      hellp abt is heer 
      <button onclick ={()=>navigate("/")}>back to home 
         </button></div>
    
  )
}


export default about
