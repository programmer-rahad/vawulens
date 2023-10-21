import { PageWelcome } from "../../components";
import WelcomeImage from "./../../images/header_bg_3.jpg";
import "./gallery.scss";

const Gallery = () => {
  const totalImages = 15;
  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(require(`./../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <PageWelcome title="Our Gallery" image={WelcomeImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure
        consequatur possimus tempore nihil deserunt impedit obcaecati.
      </PageWelcome>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <a href={image} className="block" target="_blank">
                  <img src={image} alt={`Gallery Image ${index + 1}`} />
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
