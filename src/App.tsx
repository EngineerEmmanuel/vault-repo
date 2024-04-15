import { useState } from "react";

import "./App.css";
import Posts from "./posts/post-text";
import PostImage from "./posts/post-image";
import PostVideo from "./posts/post-video";
import PostAudio from "./posts/post-audio";
import PostPeople from "./posts/post-people";
import PostFile from "./posts/post-file";
import PostCode from "./posts/post-code";
import PostImageMulti1 from "./posts/post-multi1";
import PostImageMulti2 from "./posts/post-multi2";
import PostImageMulti3 from "./posts/post-multi3";
import PostImageMulti4 from "./posts/post-multi4";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post-image" element={<PostImage />} />
        <Route path="/post-video" element={<PostVideo />} />
        <Route path="/post-audio" element={<PostAudio />} />
        <Route path="/post-people" element={<PostPeople />} />
        <Route path="/post-file" element={<PostFile />} />
        <Route path="/post-code" element={<PostCode />} />
        <Route path="/post-multi1" element={<PostImageMulti1 />} />
        <Route path="/post-multi2" element={<PostImageMulti2 />} />
        <Route path="/post-multi3" element={<PostImageMulti3 />} />
        <Route path="/post-multi4" element={<PostImageMulti4 />} />
      </Routes>
    </main>
  );
}

export default App;
