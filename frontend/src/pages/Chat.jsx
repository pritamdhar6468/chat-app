import React, { useEffect } from 'react'
import Axios  from "axios"

const Chat=() =>{
   const fetchChat=async()=>{
        const data = await Axios.get("api/chat");
        console.log(data);
   }
   useEffect(()=>{
    fetchChat();
   },[]);
  
  return (
    
    <div >Chat</div>
  );
}

export default Chat