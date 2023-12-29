function Blog() {
  return (
    <>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products !!!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="/img/blog/b1.jpg" />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
              architecto voluptatum minus omnis fugit maiores perferendis deleniti
              veniam quod libero assumenda doloribus alias magni, iste exercitationem
              repellat, porro eos.
            </p>
            <a href="#">CONTINUE READING</a>
            <h1>13/01</h1>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="/img/blog/b2.jpg" />
          </div>
          <div className="blog-details">
            <h4>Two Lesbians </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
              architecto voluptatum minus omnis fugit maiores perferendis deleniti
              veniam quod libero assumenda doloribus alias magni, iste exercitationem
              repellat, porro eos.
            </p>
            <a href="#">CONTINUE READING</a>
            <h1>13/01</h1>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="/img/blog/b3.jpg" />
          </div>
          <div className="blog-details">
            <h4>The Style Guide</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
              architecto voluptatum minus omnis fugit maiores perferendis deleniti
              veniam quod libero assumenda doloribus alias magni, iste exercitationem
              repellat, porro eos.
            </p>
            <a href="#">CONTINUE READING</a>
            <h1>13/01</h1>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="/img/blog/b4.jpg" />
          </div>
          <div className="blog-details">
            <h4>The Cotton Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
              architecto voluptatum minus omnis fugit maiores perferendis deleniti
              veniam quod libero assumenda doloribus alias magni, iste exercitationem
              repellat, porro eos.
            </p>
            <a href="#">CONTINUE READING</a>
            <h1>13/01</h1>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="/img/blog/b5.jpg" />
          </div>
          <div className="blog-details">
            <h4>Fashion Trends</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
              architecto voluptatum minus omnis fugit maiores perferendis deleniti
              veniam quod libero assumenda doloribus alias magni, iste exercitationem
              repellat, porro eos.
            </p>
            <a href="#">CONTINUE READING</a>
            <h1>13/01</h1>
          </div>
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fal fa-long-arrow-alt-right"></i>
        </a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            get E-mail upadtes about our latest shop and
            <span>special offers.</span>
          </p>
        </div>

        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Blog;
