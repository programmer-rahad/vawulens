import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const Welcome = () => {
  return (
    <header className="welcome">
      <div className="container welcome-container">
        <div className="welcome-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem explicabo ad consequatur, porro similique natus?
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="welcome-right">
          <div className="welcome-circle"></div>
          <div className="welcome-image">
            <img src={Image} alt="Welcome Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Welcome;
