import React, { useState } from 'react'



function Insert() {
  const [name, setName] = useState("")  
  const [marks, setMarks] = useState("");

  function addRecord(){
    // alert("called")
    // console.log(name);
    // console.log(marks);
  }

  
  return (
    <div className='w-8/12 mx-auto h-full flex items-center justify-center'>
        <div className=' w-[400px] bg-gray-400 p-5 flex items-center justify-center flex-col gap-5 '>
            <h2 className='text-lg font-bold'>Add Details</h2>
            <input 
                type="text" 
                placeholder='Enter Name' 
                className='w-full border-none outline-none px-10 py-2' 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter Marks' 
                className='w-full border-none outline-none px-10 py-2' 
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
            />
            <button 
                className='bg-blue-500 font-bold text-white rounded-full w-full py-3 hover:bg-blue-600'
                onClick={() => addRecord() }
            >Insert</button>
        </div>
    </div>
  )
}

export default Insert