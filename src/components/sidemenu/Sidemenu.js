import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { changeToggle } from '../../Store/emailSilice'
const Sidemenu = () => {
  const [showIcons,setIcons] = useState(true)
  const [classs,setClasss] = useState(false)
  const total = useSelector((state)=>state.email.totalMesseges)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const clickFun=()=>{
    dispatch(changeToggle('sent'))
    setClasss((state)=>!state)
  }

  return (
    <div className=''>
       <button className='button' onClick={()=>{
          navigate('/dashboard')
        }}>Compose</button>
        <div className='flex flex-col '>
            <h2 className={`my-1.5 font-mono border-solid hover:cursor-pointer ${!classs && 'rounded-md border-2  bg-slate-300'}`} onClick={()=>{
               dispatch(changeToggle('showAll'))
               setClasss((state)=>!state)
            }}>Inbox- {total}</h2>
          {  showIcons && <> <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Unread</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Statred</Link>
            <Link className={`my-1.5 font-mono border-solid  ${classs && 'rounded-md border-2  bg-slate-300'}`} onClick={()=>clickFun()}>Sent</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Archive</Link>
            <Link className='my-1.5 font-mono hover:border-solid hover:border-2 hover:rounded'>Spam</Link>
            <Link className='my-2 font-mono hover:border-solid hover:border-2 hover:rounded'>Deleted Items</Link></>}
            <button className='ml-1' onClick={()=>{
              setIcons((state)=>{
                return state=!state
              })
            }}>less</button>
        </div>
    </div>
  )
}

export default Sidemenu