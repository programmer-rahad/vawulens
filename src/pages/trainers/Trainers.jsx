import { PageWelcome } from "../../components";
import WelcomeImage from "./../../images/header_bg_5.jpg";
import { Trainer } from "./../../components/index";
import { trainers } from "../../data";

import "./trainers.scss";

const Trainers = () => {
  return (
    <>
      <PageWelcome title="Our Trainers" image={WelcomeImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        modi odit pariatur. Nesciunt vel architecto eum dolorum dolore!
      </PageWelcome>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map((trainer) => {
            return <Trainer key={trainer.id} {...trainer} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
