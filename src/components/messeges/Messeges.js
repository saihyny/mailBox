import React, { useState, useEffect } from "react";
import { Icons } from "../FileIcons";
import { Link } from "react-router-dom";
import "../../index.css";
import Messege from "./Messege";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SingleMessege from "./SingleMessege";
import { backToAllMails } from "../../Store/emailSilice";
import useFetchEmails from "../../hooks/useFetchEmails";
const Messeges = () => {
  const {isLoading} = useFetchEmails()
  const status = useSelector((state)=>state.email.showMessege)
  const dispatch = useDispatch()
 
  const  inboxMesseges = useSelector((state) => state.email.messeges);
  const  sentMesseges = useSelector((state)=>state.email.sent)
  
  
  let render
  if(status==='showAll'){
    render = (
      isLoading ? (<h2>Loading</h2>) :
      inboxMesseges.length>0 ? <Messege mes={inboxMesseges}/> : (<h2>There is no messeges</h2>)
    ) 
  } else if(status === 'readOne'){
    render = (<SingleMessege />)
  } else if(status === 'sent'){
    render = (
      isLoading ? (<h2>Loading</h2>) :
      sentMesseges.length>0 ? <Messege mes={sentMesseges}/> :  (<h2>There is no messeges</h2>)
    ) 
  }
  
  return (
    <div>
      <div className="flex justify-center bg-slate-500">
        <div>
          <button onClick={()=>dispatch(backToAllMails())}>{Icons.back}</button>
          <select>
            <option></option>
          </select>
        </div>
        <div className="flex  flex-1 justify-center">
          <Link className="pr-4">{Icons.archive}</Link>
          <Link className="pr-4">{Icons.move}</Link>
          <Link className="pr-4">{Icons.delete}</Link>
          <Link className="pr-4">{Icons.more}</Link>
        </div>
        <div>
          <label>sort</label>
          <select>
            <option></option>
          </select>
        </div>
      </div>
    { 
       render
    }
    
    </div>
  );
};

export default Messeges;
