import { Link } from "react-router-dom";
import React,{useState,useRef} from "react";
import { Editor, convertToRaw } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Icons } from "./FileIcons";
import firebase from "firebase/compat/app"; 
import "firebase/compat/firestore";
import emailjs from '@emailjs/browser'; 

const firebaseConfig = {
  apiKey: "AIzaSyDkgrX7UKjFFdorEDSRruYwoJtUCWlDCQo",
  authDomain: "mail-777d0.firebaseapp.com",
  projectId: "mail-777d0",
  storageBucket: "mail-777d0.appspot.com",
  messagingSenderId: "769439014459",
  appId: "1:769439014459:web:fcd7c43af99a44eed1861e"
};
firebase.initializeApp(firebaseConfig);

export const Dashboard = () => {
  const [editState, setEditState] = useState(null);
  const formRef = useRef(null);  // Reference to the form

  const handleSendClick = async (e) => { 
    e.preventDefault(); 

    const to = "satyasaikiranrocks@gmail.com"; 
    const subject = "test Mail"; 
    const content =  editState

    emailjs.init('9IncZkxf9Gt_p0Ewv');
    // Send email using EmailJS
    try {
      emailjs.sendForm(
        "service_tn4beqr",
        "template_8tz2wzi",
        formRef.current
      );

     
      console.log('Email sent successfully!'); 
      // ... other post-send actions (reset form, etc.)

    } catch (error) {
      console.error('Error sending email:', error);
      // Show an error message to the user
    }
  };
  return (
    <form ref={formRef}>
      <nav className="border-y-red-400 border-2  bg-gray-400 rounded-md ">
        <div className="flex justify-around ">
        <input  name="to" className="flex-1" 
    
        value="satyasaikiranrocks@gmail.com" />
          <div>
            <button className="">{Icons.back}</button>
          </div>
        </div>
      </nav>
      <div className=" bg-gray-300 rounded-md ">test Mail </div>
      {/* <input  placeholder=""></input> */}
      <div className="h-[85.5vh]">
        <Editor
          onEditorStateChange={(newState) => setEditState(newState)}
          editorState={editState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>

      <div className=" flex border-y-red-400 border-2 bg-gray-200 rounded-lg ">
        <div className="flex px-5 py-1.5 flex-1">
          <button className="mailbutton" onClick={handleSendClick}>
            send
          </button>

          <button className="px-2 pl-4">{Icons.attach}</button>
          <button className="px-2">{Icons.gif}</button>
          <button className="px-2">{Icons.stickers}</button>
          <button className="px-2">{Icons.emoji}</button>
        </div>
        <div className="flex flex-1">
          <button className="pl-0 px-2">{Icons.link}</button>
          <button className="px-2">{Icons.bold}</button>
          <button className="px-2">{Icons.colors}</button>
          <button className="px-2">{Icons.more}</button>
        </div>
        <div className="flex flex-2">
          <button>{Icons.delete}</button>
        </div>
      </div>
      </form>
  );
};