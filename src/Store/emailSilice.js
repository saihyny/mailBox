import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    showMessege:false,
    messeges:[],
    currId:null,
    totalMesseges:0,
}

const emailSlice = createSlice({
    name:'email',
    initialState,
    reducers:{
        isRead:(state,action)=>{
            state.showMessege=true;
           const index = action.payload;
           state.currId= action.payload;
           state.messeges[index].isread=true;
        },
        getEmails:(state,action)=>{
            state.messeges=action.payload;
            state.totalMesseges=action.payload.reduce((acc,item)=>{
              return item.isread === false ? acc+1 : acc;
            },0);
        },
        backToAllMails:(state,action)=>{
            state.currId=null;
            state.showMessege=false;
        },
        deleteEmail:(state,action)=>{
            state.totalMesseges--;
            const id = action.payload
            state.messeges=state.messeges.filter((item)=>{
                return item.id !== id
            })
        }
    }
})
export default emailSlice.reducer
export const {isRead,getEmails,backToAllMails,deleteEmail} = emailSlice.actions