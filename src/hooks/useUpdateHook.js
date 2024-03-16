import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc  } from "firebase/firestore";

const useUpdateHook = ()=>{
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
      return {updateEmail}
}
export default  useUpdateHook