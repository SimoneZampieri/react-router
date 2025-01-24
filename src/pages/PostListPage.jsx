import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const fetchPosts = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1>Lista Post</h1>
            <ul className="list-group my-5">
              {posts === null ? (
                <h2>Loading...</h2>
              ) : (
                posts.map((post) => (
                  <li
                    key={post.id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <span>{post.name}</span>
                    <Link
                      className="btn btn-success"
                      to={`/dettaglio-post/${post.id}`}
                    >
                      Vedi dettaglio
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
