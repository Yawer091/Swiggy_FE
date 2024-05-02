import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/Logo.svg";
import dev from "../assets/Icon.svg";
import dev1 from "../assets/Icon (1).svg";
import dev2 from "../assets/Icon (2).svg";
import dev3 from "../assets/Icon (3).svg";
import dev4 from "../assets/Icon (4).svg";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://swiggy-be.onrender.com/api/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    try {
      const response = await axios.post(
        "https://swiggy-be.onrender.com/api/posts",
        { text: newPostText, category: selectedCategory }
      );

      setPosts([...posts, response.data]);

      setNewPostText("");
      setSelectedCategory("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#1E252B] p-[20px]">
      <div className="w-[90%] m-auto rounded-md">
        <nav className="bg-[#262D34] p-[20px]">
          <div className="flex justify-between">
            <a href="#">
              {" "}
              <img src={logo} alt="logo" className="inline" />
            </a>
            <input
              className="bg-[#2C353D] p-[10px] w-[50%] rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Type here to search"
            />
            <div></div>
          </div>
        </nav>
      </div>
      <div className="w-[90%] mx-auto my-[30px] flex gap-[20px]">
        <div className=" bg-[#262D34] p-[20px]">
          <h1 className="text-white font-semibold text-[28px]">Filter Posts</h1>
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex gap-[10px] text-white my-[20px]"
            >
              <img
                src={dev}
                alt=""
                className="w-[42px] h-[42px] rounded-[4px]"
              />
              <div>
                <p className="font-semibold">#{post.category}</p>
                <p className="text-[#97989D]">Trending</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-[10px]">
            <button
              onClick={handleCreatePost}
              className="font-semibold text-white h-[44px] rounded-[6px] py-[12px] px-[16px] bg-[#FF6934] hover:bg-[#ff855d]"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
