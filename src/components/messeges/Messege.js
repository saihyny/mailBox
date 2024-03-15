import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc ,deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { isRead,deleteEmail,deleteSent } from "../../Store/emailSilice";
import { Icons } from "../FileIcons";
const Messege = (props) => {

  const messeges = props.mes
  console.log(messeges)
  const [mails, setMails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMails(messeges);
  }, [messeges]);
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

  const updateEmail = async (emailId, updateData) => {
    try {
      const emailDocRef = doc(db, "mail", emailId);
      await updateDoc(emailDocRef, updateData);
      console.log("Email updated successfully");
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };
  const deleteEmailFun = async (emailId) => {
    try {
      const emailDocRef = doc(db, "mail", emailId); // Reference the email document
      await deleteDoc(emailDocRef);
      console.log("Email deleted successfully");
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  return (
    <div className="h-[100vh]">
      {mails.map((item, index) => (
        <div>
          <ul
            key={item.id}
            className="flex 
                justify-around border-solid
                hover:cursor-pointer 
                hover:bg-slate-50
                border-slate-300 border-b-2 bg-slate-200 py-1 shadow-xl"
          >
            {!item.isread && (
              <div className="bg-orange-300 w-3 h-3 rounded-full "></div>
            )}
            <li className="pl-2" onClick={() => {
              dispatch(isRead({id:index,sm:'readOne'}));
              !isRead && updateEmail(item.id, { isread: true });
            }}>{item.to}</li>
            <li className="pl-2" onClick={() => {
              dispatch(isRead({id:index,sm:'readOne'}));
              !isRead && updateEmail(item.id, { isread: true });
            }}>{item.subject}</li>
            <li className="pr-0" onClick={() => {
              dispatch(isRead({id:index,sm:'readOne'}));
              !isRead && updateEmail(item.id, { isread: true });
            }}>
              {item.timestamp
                ? item.timestamp.toDate().toLocaleString()
                : "Loading timestamp..."}
            </li>
            <button onClick={() =>{ 
               dispatch(deleteEmail(item.id))
               dispatch(deleteSent(item.id))
              deleteEmailFun(item.id)
              }}>{Icons.delete}</button>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Messege;
