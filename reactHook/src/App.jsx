// import { Chai } from "./Chai"
import { useState } from "react";
 
function App() {

 let [Counter, setCounter]= useState(2)  //here we can give value of counter or also keep it empty in usestate
  // let Conter=5;

  const addValue=()=>{
      // Counter = Counter+1 ;
      if(Counter<20){          //counter shoulde not be added values above 20
        setCounter(Counter + 1);
      }
    
  }
   
  const removeValue=()=>{               
    if(Counter>0){              //counter shoulde not update negative value
      setCounter(Counter - 1);
    }
             
  };

  return (
 
    <>  
    <h1>React with vite</h1>
    {/* < Chai /> */}
    <h2>Counter Value:{Counter}</h2>
    <button onClick={addValue}>Add Value</button> <br /><br />
    <button onClick={removeValue}>Remove Value</button>
    </>
 
  )
}

export default App
