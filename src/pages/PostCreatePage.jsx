import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const initialFormData = {
    title: "",
    image: "",
    content: "",
  };

  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [formData, setFormData] = useState(initialFormData);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = formData.tags.split(",").map((tag) => tag.trim());
    const newPost = { ...formData, tags: tags };
    axios
      .post(`${baseApiUrl}/posts`, newPost)
      .then((res) => {
        fetchPosts();
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };
};
