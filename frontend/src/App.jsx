import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" Component={Homepage} />
      <Route path="/chats" Component={ChatPage} />
    </div>
  );
}

export default App;
