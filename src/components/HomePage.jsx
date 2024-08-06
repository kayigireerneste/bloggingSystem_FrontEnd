/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from '../styles/HomePage.module.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import { GrLinkNext } from "react-icons/gr";

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      image: image1,
      date: 'July 12, 2024',
      text: 'What we can connect to Project 2025......'
    },
    {
      image: image2,
      date: 'August 01, 2024',
      text: 'Relating to nature as an object of study and research......'
    },
    {
      image: image3,
      date: 'September 06, 2024',
      text: 'Being in a state of nature without spiritual enlightenment......'
    }
  ];

  const nextSlide = useCallback(() => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div className={HomeCSS.mainHome}>
      <div className={HomeCSS.Homecontainer}>

        <div className={HomeCSS.mainTitle}>
            <hr className={HomeCSS.line1}/>
            <h1 className={HomeCSS.head1}>BLOG &  NEWS</h1>
            <hr className={HomeCSS.line1}/>    
        </div>

        <div className={HomeCSS.cardContainer}>
          <div className={HomeCSS.card1}>
            <div className={HomeCSS.blogContent}>
                <div className={HomeCSS.date}>{slides[slideIndex].date}</div>
                <h2 className={HomeCSS.cardText}>{slides[slideIndex].text}</h2>
                <Link to="/addBlog">
                  <button className={HomeCSS.postButton}>POST BLOG</button>
                </Link>
            </div>
            <img src={slides[slideIndex].image} alt="images" className={HomeCSS.cardImage} />
          </div>
        </div>

        <div className={HomeCSS.blogsContainer}>
          <div className={HomeCSS.mainTitle1}>
              <hr className={HomeCSS.line2}/>
              <h1 className={HomeCSS.head2}>latest blog / news</h1>
              <hr className={HomeCSS.line2}/>    
          </div>

          <div className={HomeCSS.cards}>
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className={HomeCSS.card}>
                <div className={HomeCSS.imgSections}>
                  <img src={image1} alt="Blog" />
                </div>
                <div className={HomeCSS.article}>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                  </p>
                  <Link to="/singleBlog" className={HomeCSS.button}>Read More</Link>
                </div>
                <div className={HomeCSS.postedDate}>
                  <p>August 03, 2024</p>
                </div>
              </div>
            ))}
          </div>

          <div className={HomeCSS.showMoreIcon}>
            <Link to="/latestBlog">
              <a>show more</a>
            </Link>
            <Link to="/oldBlog">
               <GrLinkNext className={HomeCSS.GrLinkNext}/>
            </Link>
          </div>
        </div>

        <div className={HomeCSS.blogsContainer}>
          <div className={HomeCSS.mainTitle1}>
              <hr className={HomeCSS.line2}/>
              <h1 className={HomeCSS.head2}>old blog / news</h1>
              <hr className={HomeCSS.line2}/>    
          </div>

          <div className={HomeCSS.cards}>
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className={HomeCSS.card}>
                <div className={HomeCSS.imgSections}>
                  <img src={image1} alt="Blog" />
                </div>
                <div className={HomeCSS.article}>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                  </p>
                  <Link to="/singleBlog" className={HomeCSS.button}>Read More</Link>
                </div>
                <div className={HomeCSS.postedDate}>
                  <p>August 03, 2024</p>
                </div>
              </div>
            ))}
          </div>

          <div className={HomeCSS.showMoreIcon}>
            <Link to="/oldBlog">
              <a>show more</a>
            </Link>
            <Link to="/oldBlog">
               <GrLinkNext className={HomeCSS.GrLinkNext}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
