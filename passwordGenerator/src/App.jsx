import {useState ,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const[NumAllowed, setNumAllowed] =useState(false);
  const[charAllowed, setcharAllowed] =useState(false);
  const [password ,setPassword] = useState("");

  //userRef...
  const passwordRef= useRef[null]

  const copyToClipBoard = useCallback(()=>{
  passwordRef.current?.select();  //to select current reference password
  passwordRef.current?.setSelectionRange(0,9);  //to select password range  
  window.navigator.clipboard.writeText(password) //javascript window navigator
  },[password])

 //useCallback(()=>{},[]) useCallback with function and array of dependencies to optimize
 const passwordGenerator = useCallback(()=>{
   let pass =""
   let str= "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(NumAllowed){ //checking for number
    str +="0123456789"
   }
   if(charAllowed){
    str +="!@#$%^&*()_+-=<>,;:?'/{}[]" //checking for characters
   }   
   for (let i = 1; i <length; i++) {
    let char = Math.floor(Math.random()*str.length+1) //checking for random string
    pass += str.charAt(char)  //select characters from randome string

     }      
    setPassword(pass)    
  },[length,NumAllowed,charAllowed,setPassword]) //possible dependencies have to be change for optimization purpose to keep in chache and fetch whenever reqyiure

  useEffect(()=>{passwordGenerator()},[length,NumAllowed,charAllowed])//dependencies includes whenever any change happens in app

  return (
    <>    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 my-8 text-center text-orange-600 bg-gray-400'>
      <h3>Password Generator</h3>
   
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input className='outline-none w-full py-1 px-7'
         type="text" 
         value={password} 
         placeholder= "password"
         readOnly 
         ref={passwordRef}
         />
         <button className='rounded-lg shadow-md text-gray-500 bg-black-400 shrink-0 py-0 clickable'
         onClick={copyToClipBoard} >Copy</button>     
     </div>
  
    <div>
      <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1' >
          <input className='cursor-pointer bg-orange-600'
          type="range"
          min={2}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
            />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
      
          <input className='text-black-500' 
          type="checkbox"
          defaultChecked ={NumAllowed}
          id="numberInput"
          onChange={()=>{setNumAllowed((prev)=>!prev)} } //callback function 
          />
            <label>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
      
          <input className='text-black-500' 
          type="checkbox"
          defaultChecked ={charAllowed}
          id="numberInput"
          onChange={()=>{setcharAllowed((prev)=>!prev)} } 
          />
            <label>Character</label>
        </div>
       </div>
        
   
    </div>
    </div>
    
      
    </>
  )
}

export default App
