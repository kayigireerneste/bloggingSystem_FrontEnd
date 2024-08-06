/* eslint-disable no-unused-vars */
import OldBlogCSS from '../styles/OldBlog.module.css';
import image1 from '../images/image1.png';

export default function OldBlog() {
  

  return (
    <div className={OldBlogCSS.mainHome}>
      <div className={OldBlogCSS.Homecontainer}>
        <div className={OldBlogCSS.blogsContainer}>
          <div className={OldBlogCSS.mainTitle1}>
              <hr className={OldBlogCSS.line2}/>
              <h1 className={OldBlogCSS.head2}>Old blog / news</h1>
              <hr className={OldBlogCSS.line2}/>    
          </div>

          <div className={OldBlogCSS.cards}>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>

            <div className={OldBlogCSS.card}>
              <div className={OldBlogCSS.imgSections}>
                <img src={image1} />
              </div>
              <div className={OldBlogCSS.article}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                </p>
                <a href="" className={OldBlogCSS.button}>Read More</a>
              </div>
              <div className={OldBlogCSS.postedDate}>
                <p>August 03, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className={OldBlogCSS.paginationContainer}>
            <button className={OldBlogCSS.arrowButton}>←</button>
            <button className={OldBlogCSS.pageButton}>1</button>
            <button className={OldBlogCSS.pageButton}>2</button>
            <button className={OldBlogCSS.pageButton}>...</button>
            <button className={OldBlogCSS.arrowButton}>→</button>
       </div>



      </div>
    </div>
  );
}
