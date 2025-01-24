import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const deleteHand = (id) => {
    axios
      .delete(`${baseApiUrl}/posts/${id}`)
      .then(() => {
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
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
            <h1>{post?.title}</h1>
            <img
              className="my-3 img-fluid"
              src={post?.image}
              alt={post?.title}
            />
            <p>{post.content}</p>
            <p>
              Tags: <strong>{post?.tags.join(", ")}</strong>
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success" onClick={() => navigate(-1)}>
                Torna
              </button>
              <button className="btn btn-danger" onClick={deleteHand}>
                Elimina
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
