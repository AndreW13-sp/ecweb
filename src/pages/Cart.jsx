function Cart() {
  return (
    <>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Qunatity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <a href="#">
                  <i className="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src="/img/products/f2.jpg" alt="" />
              </td>
              <td>Shirt</td>
              <td>₹1110.77</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>₹1001</td>
            </tr>
            <tr>
              <td>
                {" "}
                <a href="#">
                  <i className="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src="/img/products/f3.jpg" alt="" />
              </td>
              <td>Shirt</td>
              <td>₹1110.77</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>₹1001</td>
            </tr>
            <tr>
              <td>
                {" "}
                <a href="#">
                  <i className="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src="/img/products/f4.jpg" alt="" />
              </td>
              <td>Shirtt</td>
              <td>₹1110.77</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>₹1001</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply coupon</h3>
          <div>
            <input type=" text" placeholder="enter coupon" />
            <button className="normal ">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>cart subtotal</td>
              <td>₹3332.31</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>₹3332.31</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to Checkout</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
