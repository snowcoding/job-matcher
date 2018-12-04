import React from "react";
// import "./assets/css/main.css";
import "./assets/css/noscript.css";
import pic01 from "../../assets/images/pic01.jpg";
import pic02 from "../../assets/images/pic02.jpg";
import pic03 from "../../assets/images/pic03.jpg";
import pic04 from "../../assets/images/pic04.jpg";
import pic05 from "../../assets/images/pic05.jpg";
import pic06 from "../../assets/images/pic06.jpg";
import pic07 from "../../assets/images/pic07.jpg";
import pic08 from "../../assets/images/pic08.jpg";

const Landing2 = props => {
  return (
    <div id="page-wrapper">
      <header id="header" className="alt">
        <h1>
          <a href="#">Seek Geek</a>
        </h1>
        <nav>
          <a href="#menu">Sign Up | Sign In</a>
        </nav>
      </header>

      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Generic</a>
            </li>
            <li>
              <a href="#">Elements</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <a href="#" className="close">
            Close
          </a>
        </div>
      </nav>

      <section id="banner">
        <div className="inner">
          <div className="logo">
            <span className="icon fa-binoculars" />
          </div>
          <h2>This is Seek Geek</h2>
          <p>
            Another full stack application by{" "}
            <a href="https://github.com/Lambda-School-Labs">Lambda Labs</a>
          </p>
        </div>
      </section>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="#" className="image">
              <img src={pic01} alt="" />
            </a>
            <div className="content">
              <h2 className="major">
                SeekGeek is the Tinder for job seekers and employers!
              </h2>
              <p>
                Like Tinder for finding jobs. If seeker matches with employer, a
                connection is made and they can message one another.
              </p>
              <a href="#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="#" className="image">
              <img src={pic02} alt="" />
            </a>
            <div className="content">
              <h2 className="major">For seekers and employers!</h2>
              <p>
                Seekers and employers can spend credits to do a super app, which
                appears as though they had matched with only one party taking
                action.
              </p>
              <a href="#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a href="#" className="image">
              <img src={pic03} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Free swipes everyday!</h2>
              <p>
                Job seekers start with 5 free apps (applications) and get plus 1
                free app per day. Employers start with one free posting, get 100
                credits per job posted and get one free call per day (employer
                version of app/match).
              </p>
              <a href="#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">Testimonials</h2>
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
            <section className="features">
              <article>
                <a href="#" className="image">
                  <img src={pic04} alt="" />
                </a>
                <h3 className="major">Sed feugiat lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src={pic05} alt="" />
                </a>
                <h3 className="major">Nisl placerat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src={pic06} alt="" />
                </a>
                <h3 className="major">Ante fermentum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src={pic07} alt="" />
                </a>
                <h3 className="major">Fusce consequat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
            </section>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Sign up now!
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section id="footer">
        <div className="inner">
          <h2 className="major">Get in touch</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4" />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
          <ul className="contact">
            <li className="fa-home">
              Untitled Inc
              <br />
              1234 Somewhere Road Suite #2894
              <br />
              Nashville, TN 00000-0000
            </li>
            <li className="fa-phone">(000) 000-0000</li>
            <li className="fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li className="fa-twitter">
              <a href="#">twitter.com/untitled-tld</a>
            </li>
            <li className="fa-facebook">
              <a href="#">facebook.com/untitled-tld</a>
            </li>
            <li className="fa-instagram">
              <a href="#">instagram.com/untitled-tld</a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled Inc. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Landing2;
