import React, { useState, useEffect } from "react";
import { Icons } from "../FileIcons";
import { Link } from "react-router-dom";
import "../../index.css";
import { collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Messege from "./Messege";
import { useDispatch } from "react-redux";
import { getEmails } from "../../Store/emailSilice";
import { useSelector } from "react-redux";
import SingleMessege from "./SingleMessege";
import { backToAllMails } from "../../Store/emailSilice";
const Messeges = () => {
  const status = useSelector((state)=>state.email.showMessege)
  const dispatch = useDispatch()
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
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchEmails = async () => {
      setIsLoading(true);
      try {
        const emailsCollectionRef = collection(db, "mail");
        const querySnapshot = await getDocs(emailsCollectionRef);
        const emails = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(getEmails(emails))
        setEmails(emails);
      } catch (error) {
        console.error("Error fetching emails: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmails(); // Call the function to fetch emails
  }, []);

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
        !status ? (
          isLoading ? (<h2>Loading</h2>) : <Messege mes={emails}/>
        ) : <SingleMessege/>
    }
    
    </div>
  );
};

export default Messeges;
