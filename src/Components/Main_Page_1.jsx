import React, { useState, useEffect } from "react";
import "../../public/CSS/Main_Page_css.css";
import { useTypewriter } from "react-simple-typewriter";
import bgimage from "../../public/image/The_bg_gif.gif";
import box_image_1 from "../../public/image/laptop-settings-lottie-animati-unscreen.gif";
import DrStrange from "../../public/image/1688122016496-removebg-preview.png";
import frontend from "../../public/image/Front.png";
import Backend from "../../public/image/Backend-removebg-preview.png";
import DBMS from "../../public/image/database.gif";
import framework from "../../public/image/framework.png";
import AI from "../../public/image/AI-removebg-preview.png";
import CSS from "../../public/image/giphy.gif";
// Round images
import HTMl from "../../public/image/HTML.gif";
import GPT from "../../public/image/ChatGPT.gif";
import GitHub from "../../public/image/Github.gif";
import BlackBox from "../../public/image/BlackBox.gif";
import Python from "../../public/image/icons8-python.gif";
import js from "../../public/image/l26hXkGwri.gif";
import c from "../../public/image/xxodzo30yoab1.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import Database_1 from "../../public/image/DataBase (2).gif";
import Database_2 from "../../public/image/DBSQLLITE.jpg";
import Database_3 from "../../public/image/AWS.gif";
//Developer Image
import Developer_Image from "../../public/image/Developer_image.png";
// Card images 
import Res from '../../public/image/Res_.gif';
import UIUX from '../../public/image/UIUx (2).png';
import Contact from '../../public/image/The_contact.gif';
// Framework
import React_img from '../../public/image/React_img.gif';
import Django_img from '../../public/image/Django.png';
import Flask_img from '../../public/image/Flask.jpg';

AOS.init();
function Main_Page_1() {
  const [useTypeeffect] = useTypewriter({
    words: ["Developer..|", "Designer..|", "& Learner..|"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
   
      <section>
        <div className="container">
          <div className="main_content">
            <div className="box" id="box1">
              <div
                className="Home_content"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h2>Hello i am </h2>
                <span className="Name">Gourav</span>
                <h1>
                  a Passionate <span>{useTypeeffect}</span>
                </h1>
                <h2>
                  From <span>Bharat</span>
                </h2>
                <div>
                  <a href="\Gourav_Pavankar__Resume__new .doc">
                  <button
                    className="button-89"
                    role="button"
                    // onClick={handleDownload}
                  >
                    Download resume{" "}
                    <span className="material-symbols-outlined">download</span>
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="box" id="bYox2" data-aos="zoom-in">
              <img src={bgimage} alt="" />
            </div>
          </div>
        </div>

        {/* blur container */}
        <div className="blur_container">
          <div className="blur_boxes" data-aos="flip-left">
            <h1></h1>
          </div>
          <div className="blur_boxes" data-aos="flip-left">
            <h1>2 months internship </h1>
          </div>
          <div className="blur_boxes" data-aos="flip-right">
            <h1>10+ Projects</h1>
          </div>
          <div className="blur_boxes" data-aos="flip-right">
            <h1>Certified Fullstack Developer</h1>
          </div>
        </div>
      </section>
      <div className="divide_line"></div>
      <div class="area">
        <h1>What is do</h1>
        <ul class="circles">
          <div className="working_box">
            <div className="work_box" id="box1" data-aos="flip-up">
              {" "}
              <div>
                <img src={Res} alt="Hello" />
              </div>
              <h2>Responsive Mobile</h2>
              <p>
              Responsive development adapts seamlessly, ensuring optimal user experience across diverse devices
              </p>
            </div>
            <div className="work_box" id="box2" data-aos="flip-down">
              <div>
                <img src={box_image_1} alt="Hello" />
              </div>
              <h2>Web Development</h2>
              <p>
              Aspiring web developer seeking to create impactful online experiences through coding and creativity.
              </p>
            </div>
            <div className="work_box" id="box3" data-aos="flip-up">
              <div>
                <img src={UIUX} alt="Hello" />
              </div>
              <h2>UI & UX Design</h2>
              <p>
              UI/UX freelancer elevating digital interactions through sleek design and intuitive experiences.
              </p>
            </div>
          </div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <section className="Developer_strange">
        <h1 className="developer_skills">Skills</h1>
        <div className="Developer_strange_next_div">
          <div className="Background_setup">
            <div className="Developer_image" data-aos="zoom-in-down">
              <img src={DrStrange} alt="Hello" />
            </div>
            <div className="Developer_details">
              <div className="line_1"></div>
              <div className="horizontal"></div>
              <div className="lines">
                <div className="vertical_line"></div>
                <div className="vertical_line"></div>
                <div className="vertical_line"></div>
                <div className="vertical_line"></div>
                <div className="vertical_line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="Round_boxs">
          <div
            className="Round_box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={frontend} alt="" />
          </div>
          <div
            className="Round_box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Backend} alt="" />
          </div>
          <div
            className="Round_box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={DBMS} alt="" />
          </div>
          <div
            className="Round_box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={framework} alt="" />
          </div>
          <div
            className="Round_box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={AI} alt="" />
          </div>
        </div>
        <div className="vertical_line_2">
          <div className="vertical_line_1"></div>
          <div className="vertical_line_1"></div>
          <div className="vertical_line_1"></div>
          <div className="vertical_line_1"></div>
          <div className="vertical_line_1"></div>
        </div>

        {/* Multi circle */}
        <div className="multi_circle">
          <div className="section_1">
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={HTMl} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={CSS} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={js} alt="" />
            </div>
          </div>
          <div className="section_1">
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={Python} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={js} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={c} alt="" />
            </div>
          </div>
          <div className="section_1">
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={Database_1} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={Database_2} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={Database_3} alt="" />
            </div>
          </div>
          <div className="section_1">
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={React_img} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={Django_img} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
               <img src={Flask_img} alt="" />
            </div>
          </div>
          <div className="section_1">
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={GPT} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={GitHub} alt="" />
            </div>
            <div
              className="front_image "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={BlackBox} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="About_sections">
        <div className="about_section">
          <div className="about_box">
            <h3>Hello ' nice to meet you ! </h3>
            <h2>i am Gourav a Fullstack Developer</h2>
           It is not only my job, but
            also my passion. I love being able to learn something everyday by
            engaging in experiments and working on projects. One of my interests
            in web development that inspires me is to make everyday routines
            easier where your life is simplified and your free time is actually
            free.
          </div>
          <div className="about_box" id="Dev_image" data-aos="zoom-in">
            <img src={Developer_Image} alt=""/>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact_details" id="Contact_detls">
          <div className="icons_box">
          <div className="contact_icons" data-aos="zoom-in"data-aos-delay="50"><i class="fa-brands fa-facebook" style={{color: "#ffffff;"}}></i></div>
          <a href="https://web.whatsapp.com/" target="_blank"><div className="contact_icons"data-aos="zoom-in"data-aos-delay="250"><i class="fa-brands fa-whatsapp"style={{color: "#ffffff;"}}></i></div></a>
          <a href="https://www.google.com/search?q=gmail&rlz=1C1FKPE_enIN996IN996&oq=gmail&gs_lcrp=EgZjaHJvbWUyFAgAEEUYORhDGIMBGLEDGIAEGIoFMhIIARAAGEMYgwEYsQMYgAQYigUyDQgCEAAYgwEYsQMYgAQyCggDEAAYsQMYgAQyEggEEAAYQxiDARixAxiABBiKBTIKCAUQABixAxiABDIKCAYQABixAxiABDINCAcQABiDARixAxiABDIHCAgQABiPAjIHCAkQABiPAtIBCjI1ODA5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank"><div className="contact_icons"data-aos="zoom-in"data-aos-delay="450"><i class="fa-solid fa-g"></i></div></a>
          </div>
          <div className="icons_box">
          <a href="https://github.com/HYDRAGOURAV" target="_blank"><div className="contact_icons" id="Git" data-aos="zoom-in"data-aos-delay="600"><i class="fa-brands fa-github"></i></div></a>
          <a href="https://www.linkedin.com/in/gourav-pavankar-4b145a29a/" target="_blank"><div className="contact_icons" id="Linkdin" data-aos="zoom-in"data-aos-delay="800"><i class="fa-brands fa-linkedin"></i></div></a>
          <div className="contact_icons"data-aos="zoom-in"data-aos-delay="1000"><i class="fa-brands fa-instagram"></i></div>
          </div>
        </div>
        <div className="contact_details" data-aos="zoom-in"data-aos-delay="1300">
          <img src={Contact} alt="" />
        </div>
      </section>
    </>
  );
}

export default Main_Page_1;
