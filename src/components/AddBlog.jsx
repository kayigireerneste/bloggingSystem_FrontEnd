/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlogCSS from "../styles/AddBlog.module.css";
import image1 from '../images/image1.png';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]); // Initialize as an empty array

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://qt-testbackend.onrender.com/api/blogs",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      console.log('Response:', response);
      if (response.data) {
        toast.success("Blog post created successfully!");
        // Optionally, clear the form
        setTitle("");
        setDescription("");
        setImage(null);
        // Fetch the updated list of blogs
        fetchBlogs();
      } else {
        toast.error("Failed to create blog post. Please try again.");
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error(err.response?.data?.message || "Failed to create blog post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://qt-testbackend.onrender.com/api/blogs");
      setBlogs(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      toast.error("Failed to fetch blogs. Please try again.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={AddBlogCSS.container}>
      <ToastContainer />
      <div className={AddBlogCSS.addContainer}>
        <h2 className={AddBlogCSS.title}>New Blog / News</h2>
        <form className={AddBlogCSS.form} onSubmit={handleSubmit}>
          <input
            type="file"
            className={AddBlogCSS.input}
            onChange={handleImageChange}
          />
          <label className={AddBlogCSS.label}>Image</label>
          <input
            type="text"
            placeholder="Title"
            className={AddBlogCSS.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className={AddBlogCSS.label}>Title</label>
          <textarea
            placeholder="Descriptions"
            className={AddBlogCSS.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <label className={AddBlogCSS.label}>Descriptions</label>
          <button type="submit" className={AddBlogCSS.addButton} disabled={loading}>
            {loading ? "Adding..." : "Add"}
          </button>
        </form>
        <div className={AddBlogCSS.mainTitle}>
          <hr className={AddBlogCSS.line1} />
          <h1 className={AddBlogCSS.head1}>List of Blogs & News</h1>
          <hr className={AddBlogCSS.line1} />
        </div>
        <div className={AddBlogCSS.tableContainer}>
          <table className={AddBlogCSS.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(blogs) && blogs.map(blog => (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td><img src={blog.image || image1} alt="Blog" className={AddBlogCSS.tableImage} /></td>
                  <td>{blog.title}</td>
                  <td>{blog.content.substring(0, 100)}...</td>
                  <td>{blog.bloggerId}</td>
                  <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className={AddBlogCSS.editButton}>Edit</button>
                    <button className={AddBlogCSS.deleteButton}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;