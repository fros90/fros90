import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home (){
  const navigate  = useNavigate();



  return (
  <>
  <div>
    hello this is about page this is  good to see 
  </div>
  <button onClick={()=>navigate("/about")}>hit me </button>
    </>
  )
}


export default Home
