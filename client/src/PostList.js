import React, { useEffect, useState } from "react";
import Axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    Axios.get("http://localhost:4002/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  console.log(posts);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {Object.values(posts).map((post) => (
        <div
          className="card"
          style={{
            width: "30%",
            marginBottom: "20px",
          }}
          key={post.id}
        >
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
