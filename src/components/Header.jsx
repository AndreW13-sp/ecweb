function Header() {
  return (
    <section id="header">
      <a href="/">
        <img src="img/logo.png" className="logo" alt="" />
      </a>
      <nav>
        <ul id="navbar">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="shop.html">Shop</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a className="active" href="about.html">
              About
            </a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a id="lg-bag" href="cart.html">
              <i className="far fa-shopping-bag"></i>
            </a>
          </li>
          <a href="#" id="close">
            <i className="far fa-times"></i>
          </a>
        </ul>
      </nav>
      <div id="mobile">
        <a href="cart.html">
          <i className="far fa-shopping-bag"></i>
        </a>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
}

export default Header;
