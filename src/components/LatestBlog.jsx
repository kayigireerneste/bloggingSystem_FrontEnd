/* eslint-disable no-unused-vars */
import LatestBlogCSS from "../styles/LatestBlog.module.css";
import image1 from "../images/image1.png";

export default function LatestBlog() {
  return (
    <div className={LatestBlogCSS.mainHome}>
      <div className={LatestBlogCSS.Homecontainer}>
        <a href="#" className={LatestBlogCSS.backLink}>
            &larr; back
        </a>
        <div className={LatestBlogCSS.blogsContainer}>
          <div className={LatestBlogCSS.mainTitle1}>
            <hr className={LatestBlogCSS.line2} />
            <h1 className={LatestBlogCSS.head2}>latest blog / news</h1>
            <hr className={LatestBlogCSS.line2} />
          </div>

          <div className={LatestBlogCSS.cards}>
            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={LatestBlogCSS.card}>
              <div className={LatestBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={LatestBlogCSS.article}>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.....
                </p>
                <a href="" className={LatestBlogCSS.button}>
                  Read More
                </a>
              </div>
              <div className={LatestBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className={LatestBlogCSS.paginationContainer}>
            <button className={LatestBlogCSS.arrowButton}>←</button>
            <button className={LatestBlogCSS.pageButton}>1</button>
            <button className={LatestBlogCSS.pageButton}>2</button>
            <button className={LatestBlogCSS.pageButton}>...</button>
            <button className={LatestBlogCSS.arrowButton}>→</button>
       </div>


      </div>
    </div>
  );
}
