import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const AboutPage = () => {
  return (
    <>
      <div className="container-about">
        <section className="about-me">
          <h2>About Me</h2>
          <hr align="center" />
          <br />
          <p>My passion in technology is designing and creating digital-based products.</p>
          <p>I really like to try new things that I find interesting for me to learn.</p>
          <br />
          <p>My interest in design cannot be separated from my daily use of social media.</p>
          <p>I often use various kinds of applications and I learn design from those applications.</p>
          <br />
          <p>For now I want to improve my skills in the field of Web Development</p>
          <p>I often follow webinars about this and I also learn a lot from Google of course.</p>
        </section>
        <div className="sosmed">
          <i>
            <BsDiscord />
            <a>レー#0407</a>
          </i>
          <i>
            <BsInstagram />
            <a>ree.ply</a>
          </i>
          <i>
            <BsGithub />
            <a>imreeply</a>
          </i>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
