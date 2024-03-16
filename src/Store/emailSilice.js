import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMessege: "showAll",
  messeges: [],
  currId: null,
  totalMesseges: 0,
  userMail: "",
  sent:[],
  readEmail:false,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    isRead: (state, action) => {
     if(state.showMessege === 'showAll') {
        state.showMessege = 'showAll';
        const index = action.payload.id;
        state.currId = action.payload.id;
        state.messeges[index].isread = true;
     }else if(state.showMessege === 'sent'){
        state.showMessege = 'sent';
        const index = action.payload.id;
        state.currId = action.payload.id;
        state.sent[index].isread = true;
     }
    },
    getEmails: (state, action) => {
        let sent = []
        let inbox = []
      action.payload.map((item)=>(
        item.from === '' ?  sent.push(item) : inbox.push(item)
      ))
      state.sent=sent;
      state.messeges=inbox;

      state.totalMesseges = action.payload.reduce((acc, item) => {
        return item.isread === false ? acc + 1 : acc;
      }, 0);
    },
    backToAllMails: (state, action) => {
      state.currId = null;
      state.showMessege = 'showAll';
    },
    deleteEmail: (state, action) => {
      state.totalMesseges--;
      const id = action.payload;
      state.messeges = state.messeges.filter((item) => {
        return item.id !== id;
      });
    },
    deleteSent:(state,action)=>{
        const id = action.payload;
      state.sent = state.sent.filter((item) => {
        return item.id !== id;
      });
    },
    saveUser: (state, action) => {
      state.userMail = action.payload;
    },
    changeToggle:(state,action)=>{
        state.showMessege=action.payload
    },
    readOne: (state,action)=>{
      state.readEmail=!state.readEmail;
    
    }
  },
});
export default emailSlice.reducer;
export const { isRead, getEmails, backToAllMails, deleteEmail, saveUser, changeToggle,deleteSent,readOne } =
  emailSlice.actions;
