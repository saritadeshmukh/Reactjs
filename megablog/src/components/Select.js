import React,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
 
     const id = useId();
  return (
    <div className='w-full'>
        {label && <label className='' htmlFor='id'> {label}</label>}
        <select {...props}
        id={id}
        ref={ref}
        className={`w-full py-5 px-4 bg-white border-spacing-2 ${className}`}>
            {options?.map((option) =>(
                <option key={option} value={option} >
                    {option}
                </option> ))}
        </select>
      
    </div>
  )
}

export default React.forwardRef(Select)