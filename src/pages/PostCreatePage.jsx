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
};
