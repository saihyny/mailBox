import React from 'react'
import { useSelector } from 'react-redux'
function SingleMessege() {
    const emailState = useSelector((state)=>state.email)
    const id = emailState.currId;
    const mail = emailState.messeges[id];

  return (
   <div>
  
      <div>{mail.name}</div>
      <div>{mail.content}</div>
      <div>{mail.subject}</div>
    
    </div>
  )
}

export default SingleMessege