import { Link } from "react-router-dom"
import Logo from './../images/logo.png'
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter,AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
     <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione quod, at nobis nostrum quibusdam?
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                        <AiOutlineTwitter />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                        <AiFillInstagram />
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>
                2023 copyright &copy; all right reserved
            </small>
        </div>
     </footer>
  )
}

export default Footer