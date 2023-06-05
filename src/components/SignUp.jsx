import { Button } from '@mui/material'
import React from 'react'

function SignUp() {
    return (
        <div className='justify-center bg-yellow-500 border-2 flex h-52  mx-auto w-[80%] items-center '>
         <div>
     
                 <div className=' my-2'>
                     <label >Email</label>
               <input className='w-full'></input>
     
                 </div>
                 <div className='my-5'>
                 <label >Password</label>
                 <input className='w-full'></input>
                 </div>
                   <div className='mx-auto  items-center flex justify-center'>
                 <Button variant="contained" sx={{marginLeft:"5px"}}>Signup</Button>
                    </div> 
         </div>
        </div>
       )
}

export default SignUp