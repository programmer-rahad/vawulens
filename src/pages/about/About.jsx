import { PageWelcome } from "../../components";
import WelcomeImage from "./../../images/header_bg_1.jpg";
import StoryImage from "./../../images/about1.jpg";
import VisionImage from "./../../images/about2.jpg";
import MissionImage from "./../../images/about3.jpg";
import "./about.scss";

const About = () => {
  return (
    <>
      <PageWelcome title="About Us" image={WelcomeImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        alias tempore, illo minus repellat harum sequi veniam necessitatibus
        maxime delectus asperiores magnam eaque molestiae nisi?
      </PageWelcome>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laboriosam ullam, quos vel saepe fugiat. Modi expedita ullam
              officiis facilis corporis suscipit facere, magni inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              incidunt deleniti laudantium non laboriosam perspiciatis nesciunt
              enim!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              eos ducimus sapiente?
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laboriosam ullam, quos vel saepe fugiat. Modi expedita ullam
              officiis facilis corporis suscipit facere, magni inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              incidunt deleniti laudantium non laboriosam perspiciatis nesciunt
              enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae eos ducimus sapiente?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laboriosam ullam, quos vel saepe fugiat. Modi expedita ullam
              officiis facilis corporis suscipit facere, magni inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              incidunt deleniti laudantium non laboriosam perspiciatis nesciunt
              enim!
            </p> 
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
