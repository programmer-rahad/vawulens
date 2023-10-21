import { PageWelcome } from "../../components";
import  WelcomeImage  from "./../../images/header_bg_2.jpg";
import  {MdEmail} from 'react-icons/md'
import  {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <PageWelcome title="Get In Touch" image={WelcomeImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, in
        laboriosam repellendus suscipit sapiente accusantium perferendis
        exercitationem ad soluta culpa.
      </PageWelcome>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:rahadkhan08@gmail.com" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
