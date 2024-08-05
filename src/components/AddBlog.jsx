/* eslint-disable no-unused-vars */
import React from "react";
import AddBlogCSS from "../styles/AddBlog.module.css";
import image1 from '../images/image1.png'

const AddBlog = () => {
  return (
    <div className={AddBlogCSS.container}>
      <div className={AddBlogCSS.addContainer}>
        <button className={AddBlogCSS.backButton}>← back home</button>
        <h2 className={AddBlogCSS.title}>New Blog / news</h2>
        <form className={AddBlogCSS.form}>
          <input type="file" placeholder="image" className={AddBlogCSS.input} />
          <label className={AddBlogCSS.label}>image</label>
          <input type="text" placeholder="Title" className={AddBlogCSS.input} />
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
            <hr className={AddBlogCSS.line1}/>
            <h1 className={AddBlogCSS.head1}>list of blogs &  news</h1>
            <hr className={AddBlogCSS.line1}/>    
        </div>
        <div className={AddBlogCSS.cards}>

            <div className={AddBlogCSS.card}>
              <div className={AddBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={AddBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={AddBlogCSS.button}>Read More</a>
              </div>
              <div className={AddBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={AddBlogCSS.card}>
              <div className={AddBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={AddBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={AddBlogCSS.button}>Read More</a>
              </div>
              <div className={AddBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={AddBlogCSS.card}>
              <div className={AddBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={AddBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={AddBlogCSS.button}>Read More</a>
              </div>
              <div className={AddBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={AddBlogCSS.card}>
              <div className={AddBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={AddBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={AddBlogCSS.button}>Read More</a>
              </div>
              <div className={AddBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>
          </div>
          <div className={AddBlogCSS.paginationContainer}>
            <button className={AddBlogCSS.arrowButton}>←</button>
            <button className={AddBlogCSS.pageButton}>1</button>
            <button className={AddBlogCSS.pageButton}>2</button>
            <button className={AddBlogCSS.pageButton}>...</button>
            <button className={AddBlogCSS.arrowButton}>→</button>
       </div>


      </div>
    </div>
  );
};

export default AddBlog;
