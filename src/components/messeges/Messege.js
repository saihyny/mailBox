import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import {  useDispatch, useSelector } from "react-redux";

import { isRead } from "../../Store/emailSilice";
const Messege = (props) => {
  const [mails, setMails] = useState([]);
  const dispatch = useDispatch()
  const messeges = useSelector((state)=>state.email.messeges)
  
  useEffect(() => {
    setMails(messeges);
  }, []);
  const firebaseConfig = {
    apiKey: "AIzaSyDkgrX7UKjFFdorEDSRruYwoJtUCWlDCQo",
    authDomain: "mail-777d0.firebaseapp.com",
    projectId: "mail-777d0",
    storageBucket: "mail-777d0.appspot.com",
    messagingSenderId: "769439014459",
    appId: "1:769439014459:web:fcd7c43af99a44eed1861e",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
   const updateEmail = async(emailId, updateData) => {
      try {
        const emailDocRef = doc(db, "mail", emailId);
        await updateDoc(emailDocRef, updateData);
        console.log("Email updated successfully");
      } catch (error) {
        console.error("Error updating email:", error);
      } 
  };
  
  return (
    <div className="h-[100vh]">
      {mails.map((item,index) => (
        <div>
        {item.isread &&  console.log(item.isread)} 
          <ul
            onClick={()=>{
              dispatch(isRead(index))
             !isRead && updateEmail(item.id,{isread:true})
            }}
            key={item.id}
            className="flex 
                justify-around border-solid
                hover:cursor-pointer 
                hover:bg-slate-50
                border-slate-300 border-b-2 bg-slate-200 py-1 shadow-xl"
          >
            {!item.isread && <div className="bg-orange-300 w-3 h-3 rounded-full "></div>}
            <li className="pl-2">{item.to}</li>
            <li className="pl-2">{item.subject}</li>
            <li className="pr-0">
              {item.timestamp
                ? item.timestamp.toDate().toLocaleString()
                : "Loading timestamp..."}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Messege;
