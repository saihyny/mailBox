import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { isRead } from "../../Store/emailSilice";
