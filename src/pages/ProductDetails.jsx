import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  useEffect(() => {
    console.log("params:", productId);
    alert(`product id is ${productId}`);
  }, [productId]);

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src="img/products/f1.jpg" width="100%" id="MainImg" alt="" />

          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src="img/products/f1.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>

            <div className="small-img-col">
              <img
                src="img/products/f2.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>

            <div className="small-img-col">
              <img
                src="img/products/f3.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>

            <div className="small-img-col">
              <img
                src="img/products/f4.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home/T-Shirt</h6>
          <h4>{"Men's Fashion T-Shirt"}</h4>
          <h2>₹999</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add to Cart</button>
          <h4>Product Details</h4>
          <span>
            The Gidan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq.
            yd. fabric constructed from 100% cotton, this classic fit preshrunk
            jersey knit provides unmatched comfort with each wear.
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src="img/products/n1.jpg" alt="" />
            <div className="des">
              <span>addibas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>₹999</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>

          <div className="pro">
            <img src="img/products/n2.jpg" alt="" />
            <div className="des">
              <span>addibas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>₹999</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>

          <div className="pro">
            <img src="img/products/n3.jpg" alt="" />
            <div className="des">
              <span>addibas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>₹999</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>

          <div className="pro">
            <img src="img/products/n4.jpg" alt="" />
            <div className="des">
              <span>addibas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>₹999</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            get Email updates about our latest shop and <span>special offers.</span>
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

export default ProductDetails;
