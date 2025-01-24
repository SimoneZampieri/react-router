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

  const handleNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...formData };
    axios.post(`${baseApiUrl}/posts`, newPost).then((res) => {
      setFormData(initialFormData);
      navigate("/posts");
    });
  };

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1 className="my-3">Nuovo Post</h1>
            <div className="container my-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h2>Scrivi un nuovo post</h2>
                  </div>
                  <form action="" onSubmit={handleNewPost}>
                    <div className="mb-3">
                      <label htmlFor="title">Titolo</label>
                      <input
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Titolo..."
                        value={formData.title}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image">URL immagine</label>
                      <input
                        id="image"
                        type="text"
                        name="image"
                        className="form-control"
                        placeholder="URL immagine..."
                        value={formData.image}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary" type="submit">
                        Aggiungi Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCreate;
