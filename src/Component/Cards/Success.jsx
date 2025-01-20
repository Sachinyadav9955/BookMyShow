import React, { useEffect, useState } from 'react'
import {PacmanLoader} from 'react-spinners'
const Success = () => {

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])

  return (
    <div className='bg-white relative top-[-110px] h-[100vh]  flex flex-col items-center justify-center z-2 p-20'>

      {
        loading ? <PacmanLoader className='mr-20' color='#00D66F' size={60} /> : <div> <h2 className='text-4xl font-semibold ml-10 mb-3'>Payment successfull</h2>
        <h3 className='text-2xl'>Your seat has been successfully booked</h3>
        </div>
      }
      
     
    </div>
    
  )
}

export default Success