function About() {
  return (
    <>
      <section id="header">
        <a href="#">
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

      <section id="page-header" className="about-header">
        <h2>#knowUs</h2>
        <p>Sup !!!</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src="/img/about/a6.jpg" />
        <div>
          <h2>Who we are ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi totam
            veritatis dolorem. A nesciunt eligendi molestiae quasi repudiandae nisi
            fugiat! Eaque, reprehenderit rem tenetur error aut assumenda eum unde!
            Consequuntur.
          </p>
          <abbr title="">Create stunning responsive website with me !</abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Create stunning responsive website with me !
          </marquee>
        </div>
      </section>
    </>
  );
}

export default About;
