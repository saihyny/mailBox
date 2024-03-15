import React from "react";
import { Icons } from "./FileIcons";
import Sidemenu from "./sidemenu/Sidemenu";
import Messeges from "./messeges/Messeges";
import {useSelector,useDispatch} from 'react-redux'

const Emails = () => {
  const isread = useSelector((state)=>state.email)
  console.log(isread);
  return (
    <div>
      <div className='flex items-center justify-center bg-slate-300 p-1'>
        <div className="flex items-center basis-1/3  ">
        <input />
        <button className=" pl-1">{Icons.search}</button>
        </div>
       
      </div>
      <div className="flex bg-slate-800 h-[100vh]">
        <div className="bg-slate-400 basis-1/4 p-2">
          <Sidemenu/>
        </div>
        <div className="bg-slate-600 basis-3/4">
          <Messeges />
        </div>
      </div>
    </div>
  );
};

export default Emails;
