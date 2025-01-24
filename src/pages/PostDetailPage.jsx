import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

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
};
