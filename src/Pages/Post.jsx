import React, { useState, useEffect } from "react";
import axios from "axios";
const Post = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("https://swiggy-be.onrender.com/api/posts");
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-lg mt-3">{post.content}</p>
      <p className="text-sm text-gray-500 mt-3">{post.category}</p>
    </div>
  );
};

export default Post;
