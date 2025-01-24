import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL parameters
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const fetchPost = () => {
    axios
      .get(`${baseApiUrl}/posts/${id}`) // Fetch the specific post
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  };

  const deleteHand = () => {
    axios
      .delete(`${baseApiUrl}/posts/${id}`) // Use the post ID for deletion
      .then(() => {
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  useEffect(() => {
    fetchPost(); // Fetch the specific post on component mount
  }, [id]);

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
            <p>{post?.content}</p>
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
