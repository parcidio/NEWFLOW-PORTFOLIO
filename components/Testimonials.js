import styles from "../styles/Testimonial.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <div>
        <div className={styles.myCarousel}>
          <div className={styles.testimonial__head}>
            <div className={styles.testimonial__image}>
              <Image
                className={styles.image}
                src="/portfolio_pic.jpeg"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.testimonial__introduction}>
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <p>
            I enjoy catching up with Fetch on my laptop, or on my phone when I'm
            on the go!
          </p>
        </div>
      </div>
      <div>
        <div className={styles.myCarousel}>
          <div className={styles.testimonial__head}>
            <div className={styles.testimonial__image}>
              <Image
                className={styles.image}
                src="/portfolio_pic.jpeg"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.testimonial__introduction}>
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <p>
            The simple and intuitive design makes it easy for me use. I highly
            recommend Fetch to my peers.
          </p>
        </div>
      </div>
      <div>
        <div className={styles.myCarousel}>
          <div className={styles.testimonial__head}>
            <div className={styles.testimonial__image}>
              <Image
                className={styles.image}
                src="/theron.jpg"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.testimonial__introduction}>
              <h3>Theron Kasita</h3>
              <h4>Developer</h4>
            </div>
          </div>
          <p>
            I enjoyed working with Andre, he is a great programmer, team
            player and motivator.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonials;
