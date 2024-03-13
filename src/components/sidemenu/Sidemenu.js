import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Sidemenu = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
        <button className='button' onClick={()=>{
          navigate('/dashboard')
        }}>Compose</button>
        <div className='flex flex-col '>
            <h2 className='my-1.5 font-mono border-solid border-2 bg-slate-300 rounded-md'>Inbox</h2>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Unread</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Statred</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Sent</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Archive</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Spam</Link>
            <Link className='my-2 font-mono hover:border-solid hover:border-2 hover:rounded'>Deleted Items</Link>
            <button className='ml-1'>less</button>
        </div>
    </div>
  )
}

export default Sidemenu