import React, {useId} from 'react'

const Input= React.forwardRef(function Input({
  label,
  type="text",
  className='',
  ...props
  }, ref) {
    const id = useId();
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1' 
                       htmlFor='{props.id}'>    {label}
                </label>}
      <input type={type}
        className={`w-full py-5 px-4 bg-white border-spacing-2 ${className}`}
        ref={ref} //its will give reference of Parent component to use states of parent n so we use ForwordREF
        {...props}
        id={id}
      />
    </div>
  
  return <h1>Test</h1>
})
export default Input
