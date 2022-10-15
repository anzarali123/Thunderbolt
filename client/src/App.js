import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/Homepage/homepage.route";
import ChatPage from "./routes/Chatpage/chatpage.route";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
