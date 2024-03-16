
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc ,deleteDoc } from "firebase/firestore";
const useDeleteHook = (emailId)=>{
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

        const deleteEmailFun = async (emailId) => {
            try {
              const emailDocRef = doc(db, "mail", emailId); // Reference the email document
              await deleteDoc(emailDocRef);
              console.log("Email deleted successfully");
            } catch (error) {
              console.error("Error deleting email:", error);
            }
          };
         return {deleteEmailFun};
}
export default useDeleteHook;