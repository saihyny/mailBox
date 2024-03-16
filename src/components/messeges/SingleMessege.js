import React from 'react'
import { useSelector } from 'react-redux'
function SingleMessege(props) {
  const emailState = useSelector((state)=>state.email)
  let mails ;

  if(props.status==='sent'){
    mails=emailState.sent
  }else{
    mails=emailState.messeges
  }

    const id = emailState.currId;
    const mail = mails[id];
   
  return (
   <div className='flex flex-col h-[100vh] ' >
  
      <div className='font-mono justify-items-center border-solid border-violet-900 bg-violet-300 border-2 basis-1/5 p-2 rounded-md'>{mail.name}</div>
      <div className='font-mono justify-items-center border-solid  bg-violet-400 border-2 border-violet-900 basis-1/2 p-2  rounded-lg'>{mail.content}</div>
      <div className='font-mono border-violet-900 justify-items-center border-solid  bg-violet-600 border-2 basis-1/4 p-2 rounded-md'>{mail.subject}</div>
    
    </div>
  )
}

export default SingleMessege