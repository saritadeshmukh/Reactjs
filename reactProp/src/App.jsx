import { Card } from "./components/Card";
import React from "react";


function App() {

  const myObj={
    username:"sari@gmail.com",
    age:23
  }

  return (
    <>
     <h1 className='bg-green-100 text-black rounded-2xl'>Tailwind</h1>

     <Card username="chaiaurcode"  />
     <Card />
    </>
  )
}

export default App
