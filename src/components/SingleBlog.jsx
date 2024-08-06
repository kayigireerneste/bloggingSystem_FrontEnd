/* eslint-disable no-unused-vars */
import React from "react";
import SingleBlogCSS from "../styles/SingleBlog.module.css";
import image from "../images/image1.png";

const SingleBlog = () => {
  return (
    <div className={SingleBlogCSS.container}>
      <img src={image} alt="Blog Post" className={SingleBlogCSS.image} />
      <h2 className={SingleBlogCSS.title}>
        Lorem ipsum dosectetur adipisicing elit, sed do. <h6>July 22, 2024</h6>
      </h2>
      <p className={SingleBlogCSS.content}>
        Lorem ipsum dosectetur adipisicing elit, sed do. Lorem ipsum dolor sit
        amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris
        elementum accumsan leo velite in fermentum et, sollicitudin et.
      </p>
      <p className={SingleBlogCSS.content}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
      <div className={SingleBlogCSS.comments}>
        <div className={SingleBlogCSS.commentItem}>
          <span className={SingleBlogCSS.name}>Eric</span>
          <span className={SingleBlogCSS.date}>July 22, 2024</span>
          <p className={SingleBlogCSS.commentText}>
            Lorem ipsum dosectetur adipisicing elit, sed do. Lorem ipsum dolor
            sit amet,consectetur Nulla fringilla purus at leo dignissim congue.
          </p>
        </div>
        <div className={SingleBlogCSS.commentItem}>
          <span className={SingleBlogCSS.name}>Eric</span>
          <span className={SingleBlogCSS.date}>July 22, 2024</span>
          <p className={SingleBlogCSS.commentText}>
            Lorem ipsum dosectetur adipisicing elit, sed do. Lorem ipsum dolor
            sit amet,consectetur Nulla fringilla purus at leo dignissim congue.
          </p>
        </div>
        <div className={SingleBlogCSS.commentItem}>
          <span className={SingleBlogCSS.name}>Eric</span>
          <span className={SingleBlogCSS.date}>July 22, 2024</span>
          <p className={SingleBlogCSS.commentText}>
            Lorem ipsum dosectetur adipisicing elit, sed do. Lorem ipsum dolor
            sit amet,consectetur Nulla fringilla purus at leo dignissim congue.
          </p>
        </div>
      </div>
      <div className={SingleBlogCSS.commentForm}>
        <input
          type="email"
          placeholder="Email"
          className={SingleBlogCSS.email}
        />
        <textarea
          placeholder="Comment"
          className={SingleBlogCSS.comment}
        ></textarea>
        <button className={SingleBlogCSS.submitButton}>Add comment</button>
      </div>
    </div>
  );
};

export default SingleBlog;
