import React from "react";
import ChatWindown from "./ChatWindown";
import Sidebar from "./Sidebar";

function ChatRoom (){
    return(
        <div>
           <Col span={6}>
               <Sidebar/>
           </Col>
           <Col span={18}>
               <ChatWindown/>
           </Col>
        </div>
    )
}
export default ChatRoom