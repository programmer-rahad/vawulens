import Image from "../images/values.jpg";
import { SectionHeader } from "./index";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import { Card } from "../UI";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHeader icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            porro quod tenetur.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, title, icon, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
