/* eslint-disable no-unused-vars */
import React from "react";
import AddBlogCSS from "../styles/AddBlog.module.css";
import image1 from '../images/image1.png';

const AddBlog = () => {
  return (
    <div className={AddBlogCSS.container}>
      <div className={AddBlogCSS.addContainer}>
        <button className={AddBlogCSS.backButton}>← back home</button>
        <h2 className={AddBlogCSS.title}>New Blog / News</h2>
        <form className={AddBlogCSS.form}>
          <input type="file" className={AddBlogCSS.input} />
          <label className={AddBlogCSS.label}>Image</label>
          <input
            type="text"
            placeholder="Title"
            className={AddBlogCSS.input}
          />
          <label className={AddBlogCSS.label}>Title</label>
          <textarea
            placeholder="Descriptions"
            className={AddBlogCSS.textarea}
          ></textarea>
          <label className={AddBlogCSS.label}>Descriptions</label>
          <button type="submit" className={AddBlogCSS.addButton}>
            Add
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
              <tr>
                <td>1</td>
                <td><img src={image1} alt="Blog" className={AddBlogCSS.tableImage} /></td>
                <td>Sample Title</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</td>
                <td>John Doe</td>
                <td>August 03, 2024</td>
                <td>
                  <button className={AddBlogCSS.editButton}>Edit</button>
                  <button className={AddBlogCSS.deleteButton}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src={image1} alt="Blog" className={AddBlogCSS.tableImage} /></td>
                <td>Sample Title</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</td>
                <td>Jane Smith</td>
                <td>August 03, 2024</td>
                <td>
                  <button className={AddBlogCSS.editButton}>Edit</button>
                  <button className={AddBlogCSS.deleteButton}>Delete</button>
                </td>
              </tr>
              {/* Repeat for other blog entries */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
