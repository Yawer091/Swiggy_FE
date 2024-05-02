import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Feed from "./Pages/Feed";
import Post from "./Pages/Post";
function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/post/:postId" element={<Post />} />{" "}
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}

export default App;
