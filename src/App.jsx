import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Feed from "./Pages/Feed";
import Post from "./Pages/Post";

function App() {
  return (
    <>
      <Auth />
    </>
  );
}

export default App;
