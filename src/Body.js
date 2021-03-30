import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import image1 from "./images/rsz_tutedude2.jpg";
import image2 from "./images/w1.png";
import image3 from "./images/w2.svg";
import image4 from "./images/w3.png";
import image5 from "./images/w4.png";
import image6 from "./images/w5.png";
import image7 from "./images/w6.png";
import image8 from "./images/w7.svg";
import image9 from "./images/w8.png";
import image10 from "./images/b1.jpg";
import image11 from "./images/b2.jpg";
import image12 from "./images/b3.png";
import image13 from "./images/b4.png";
import image14 from "./images/v1.jpg";
import image15 from "./images/v2.jpg";
import image16 from "./images/v3.jpg";
import image17 from "./images/v4.jpg";
import image18 from "./images/v5.png";
import image19 from "./images/d1_0.jpg";

function Body() {
  return (
    <div>
      <div className="jumbotron p-0 m-0 bg-white full">
        <div className="row m-0">
          <div className="col-lg-5 col-sm-12 p-4  d-flex flex-column justify-content-center  description-box content">
            <p className="para">Best Quality Courses.</p>
            <h1 style={{ fontFamily: "Ubuntu" }}>Brighten Up Yourself.</h1>
            <p className="para2">
              Learning a new skill is necessary in this highly competetive
              world.
            </p>
            <Link className=" btn btn-primary p-3 hover-buttons" to="/">
              Explore More..
            </Link>
          </div>
          <div
            className="col-lg-7 col-sm-12 d-lg-block d-none p-0 banner"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <div
            className="d-lg-none col-sm-12 p-0 banner1"
            style={{ backgroundImage: `url(${image1})` }}
          />
        </div>
      </div>
      <div className="tech">
        <div className="mt-5 font-weight-bold h1 text-center">
          <p className="intro-heading ">Select Your Skill</p>
        </div>
        <div className="mt-5  font-weight-bold h1 text-left">
          <p className="sub-heading">Technology</p>
        </div>
        <div className="row d-flex justify-content-space-around">
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image2} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">Web Devlopment</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image3} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">App Devlopment</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image4} alt="Card1" />
              </div>
              <div className="card-body">
                <p className="card-title">C++</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image5} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">Java</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image6} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">Python</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image7} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">Data Structures</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image8} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">Dynamic Programming</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
            <Link
              to="/"
              className="card  text-decoration-none shadow-lg card-extra"
            >
              <div className="image_fix">
                <img className="card-img-top" src={image9} alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">Ethical Hacking</p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mt-5  font-weight-bold h1 text-left">
            <p className="sub-heading">Bussiness</p>
          </div>
          <div className="row d-flex justify-content-space-around">
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image10} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Enterpreneurship</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image11} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Digital Marketting</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image12} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Stock Market</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image13} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Technical Analysis</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-5  font-weight-bold h1 text-left">
            <p className="sub-heading">Visual Arts</p>
          </div>
          <div className="row d-flex justify-content-space-around">
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image14} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Photography</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image15} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Adobe Photoshop</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image16} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Preimere Pro</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image17} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">After Effects</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center my-2 ">
              <Link
                to="/"
                className="card  text-decoration-none shadow-lg card-extra"
              >
                <div className="image_fix">
                  <img className="card-img-top" src={image18} alt="Card" />
                </div>
                <div className="card-body">
                  <p className="card-title">Adobe Illustrator</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="prop">
        <div className="prop_div">
          <p>
            Buy pack of 4 courses at{" "}
            <span className="prop_div_cut">Rs.2800</span> Rs.1400 only
          </p>
          <div className="d-flex justify-content-space-around">
            <Link
              className="prop_btn  btn btn-primary p-2 hover-buttons"
              to="/"
            >
              Explore now..
            </Link>
            <img className="prop_img" src={image15} alt="hi" />
          </div>
        </div>
      </div>
      <div className="working">
        <div className="mt-1 font-weight-bold h1 text-center">
          <p className="intro-heading2 mb-2">How does it work?</p>
        </div>
        <div className="row d-flex justify-content-space-around ">
          <div className="work col-lg-4 col-sm-12 col-md-6  text-center d-flex flex-column justify-content-center align-items-center description-box">
            <img className="image_work" src={image14} alt="hi" />
            <h2 className="mt-4 mb-4">Vedio Lectures</h2>
            <p>
              After enrolling in the course, you will get access to the premium
              video lectures apt to provide you clear understanding of concepts.
            </p>
          </div>
          <div className="work col-lg-4 col-sm-12 col-md-6  text-center d-flex flex-column justify-content-center align-items-center description-box">
            <img className="image_work" src={image10} alt="hi" />
            <h2 className="mt-4 mb-4">Live Doubt Solving</h2>
            <p>
              After enrolling in the course, you will get access to the premium
              video lectures apt to provide you clear understanding of concepts.
            </p>
          </div>
          <div className="work col-lg-4 col-sm-12 col-md-6  text-center d-flex flex-column justify-content-center align-items-center description-box">
            <img className="image_work" src={image13} alt="hi" />
            <h2 className="mt-4 mb-4">Projects</h2>
            <p>
              After enrolling in the course, you will get access to the premium
              video lectures apt to provide you clear understanding of concepts.
            </p>
          </div>
        </div>
      </div>

      <div className="row  why">
        <div className="col-lg-5 col-sm-12 d-lg-block justify-content-center d-none p-0 banner ">
          <img className="image19" alt="hi" src={image19} />
        </div>
        <div
          className="d-lg-none col-sm-12 p-0 banner1"
          style={{ backgroundImage: `url(${image19})` }}
        />
        <div className="col-lg-6 col-sm-12 p-4 text-left d-flex flex-column justify-content-center align-items-center description-box">
          <div className="mt-2 mb-2 font-weight-bold h1 text-center ">
            <p className="why_heading1">Why TuteDude?</p>
          </div>
          <div className="d-flex justify-content-left">
            <div className="numbers">
              <p className="number">1</p>
            </div>
            <div className="d-flex flex-column">
              <p className="why_heading">Vedio Lectures:</p>
              <p className="why_description">
                We provide premium quality videos for the skill you want to
                learn.These videos are made by experts in their fields.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-left">
            <div className="numbers">
              <p className="number">2</p>
            </div>
            <div className="d-flex flex-column">
              <p className="why_heading">Guidance:</p>
              <p className="why_description">
                On the path to learning your desired skill if you face any
                difficulty your dude will be there to guide you.Any doubt and
                you can ask him personally on a live chat.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-left">
            <div className="numbers">
              <p className="number">3</p>
            </div>
            <div className="d-flex flex-column">
              <p className="why_heading">Certificate:</p>
              <p className="why_description">
                You can ask for the certificate of completion after you watch
                the full course in chat section from the mentor.This is only for
                the paid courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
