import React, { useEffect, useState } from 'react'
// import moment from 'moment'; 
const Messege = (props) => {
   const [mails,setMails] = useState([])

   useEffect(()=>{
    setMails(props.mes)
   },[])
// setMails(props.mes)
   
    
  
  return (
    <div>
        {
            mails.map((item)=>(
                <div className=''>
                <ul key={item.id} className='flex 
                justify-around border-solid border-2 rounded-md ' >
                <li className='pl-2'>{item.to}</li>
                <li className='pl-2'>{item.subject}</li>
                <li  className='pr-0'>{item.timestamp 
                                ? item.timestamp.toDate().toLocaleString() 
                                : 'Loading timestamp...'
                            }</li> 
                </ul>
            </div>
            ))
        }
    </div>
  )
}

export default Messege