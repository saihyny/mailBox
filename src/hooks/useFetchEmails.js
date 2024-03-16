import React,{useEffect,useState} from "react";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getEmails } from "../Store/emailSilice";
import { useDispatch } from "react-redux";

const useFetchEmails = ()=>{
    const [isLoading, setIsLoading] = useState(false);
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
          } catch (error) {
            console.error("Error fetching emails: ", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchEmails()
      }, []);
      return {isLoading}

}
export default useFetchEmails;