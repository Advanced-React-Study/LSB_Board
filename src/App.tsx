import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./pages/board/Board";
import Post from "./pages/post/Post";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/board" element={<Board />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default App;
