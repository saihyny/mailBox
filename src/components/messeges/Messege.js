import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isRead, deleteEmail, deleteSent,readOne } from "../../Store/emailSilice";
import { Icons } from "../FileIcons";
import useDeleteHook from "../../hooks/useDeleteHook";
import useUpdateHook from "../../hooks/useUpdateHook";

const Messege = (props) => {
  const { deleteEmailFun } = useDeleteHook();
  const { updateEmail } = useUpdateHook();

  const messeges = props.mes;
  const [mails, setMails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMails(messeges);
  }, [messeges]);

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
            <li
              className="pl-2"
              onClick={() => {
                dispatch(isRead({ id: index}));
                dispatch(readOne())
                !item.isread && updateEmail(item.id, { isread: true });
              }}
            >
              {item.to}
            </li>
            <li
              className="pl-2"
              onClick={() => {
                dispatch(isRead({ id: index }));
                dispatch(readOne())
                !item.isread && updateEmail(item.id, { isread: true });
              }}
            >
              {item.subject}
            </li>
            <li
              className="pr-0"
              onClick={() => {
                dispatch(isRead({ id: index}));
                dispatch(readOne())
                !item.isread && updateEmail(item.id, { isread: true });
              }}
            >
              {item.timestamp
                ? item.timestamp.toDate().toLocaleString()
                : "Loading timestamp..."}
            </li>
            <button
              onClick={() => {
                dispatch(deleteEmail(item.id));
                dispatch(deleteSent(item.id));
                deleteEmailFun(item.id);
              }}
            >
              {Icons.delete}
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Messege;
