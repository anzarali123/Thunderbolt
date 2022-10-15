import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatPage() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchchats = async () => {
      const { data } = await axios.get("http://localhost:5000/api/chats");
      console.log(data);
      setChats(data);
    };
    fetchchats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <h1 key={chat._id}>{chat.chatName}</h1>
      ))}
    </div>
  );
}

export default ChatPage;
