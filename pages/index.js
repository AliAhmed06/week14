import {useRouter} from 'next/router'

function Index() {
  const router = useRouter();

  return (
    <div className='w-8/12 mx-auto h-full pt-10'>
      <button 
        className='bg-blue-400 text-white py-2 px-7 rounded-md hover:bg-blue-500' 
        onClick={() => router.push("/insert") }
      >Insert</button>
      <table className=' w-full text-center mt-5'>
        <thead className='bg-gray-300 h-10'>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          <tr className='h-10'>
            <td>John</td>
            <td>76</td>
            <td>
              <button 
                className='bg-green-400 text-white py-2 px-7 rounded-md hover:bg-green-500'
                onClick={() => router.push("/edit/" + "e1") }
              >Update</button>
              <button className='bg-red-400 text-white py-2 px-7 rounded-md hover:bg-red-500 ml-5'>Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  )
}

export default Index