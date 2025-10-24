import { useState } from "react";
import useIsMobile from "./useIsMobile";
import styles from "../styles/PortfolioSection.module.css";

export default function PortfolioSection() {
  const projects = [
    {
      desktopTitle: "IMMERSIVE,<br /> HIGHFIDELITY AUDIO",
      mobileTitle: "IMMERSIVE, HIGHFIDELITY<br /> AUDIO",
      text: `HomePod is a powerhouse of a speaker. Apple engineered audio technology and advanced software deliver high fidelity sound throughout the room. It intelligently adapts to whatever it’s playing — or whatever it’s playing — and surrounds you in immersive audio that makes everything you listen to sound incredible.`,
      images: ["/homepod1.jpg", "/homepod2.jpg"],
    },
    {
      desktopTitle: "SHOP SIZZLE. WEAR<br /> BOLDLY.",
      mobileTitle: "SHOP SIZZLE. WEAR BOLDLY.",
      text: `Shop Sizzle brings bold, trend-forward fashion to life. We blend heat, style, and confidence in every piece—empowering you to stand out, express yourself, and own every look effortlessly.`,
      images: ["/fashion1.jpg", "/fashion2.png"],
    },
    {
      desktopTitle: "WHOLESOME, TASTY<br /> FOOD FOR HAPPY PETS",
      mobileTitle: "WHOLESOME, TASTY FOOD<br /> FOR HAPPY PETS",
      text: `Our premium pet food offers essential nutrients for a happy, healthy life. Made with high-quality ingredients, it's the perfect choice for your furry friend.`,
      images: ["/pets1.jpg", "/pets2.jpg"],
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.header}>
        <div className={styles.subHeader}>
          <span className={styles.icon}>
            <img src="STAR.svg" alt="STAR" />
          </span>
          <span className={styles.subtitle}>PORTFOLIO</span>
        </div>
        <h2 className={styles.title}>The Proof Is In The Pixels</h2>
      </div>

      {projects.map((project, index) => (
        <ProjectBlock
          key={index}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}

function ProjectBlock({ project, reverse }) {
  const [mainImage, setMainImage] = useState(project.images[0]);
  const isMobile = useIsMobile(768); // ✅ detect mobile

  const titleToRender = isMobile ? project.mobileTitle : project.desktopTitle;

  return (
    <div className={`${styles.projectRow} ${reverse ? styles.reverse : ""}`}>
      <div className={`${reverse ? styles.projectTextRight : styles.projectText}`}>
        <h3 dangerouslySetInnerHTML={{ __html: titleToRender }} />
        <p>{project.text}</p>
        <a href="#" className={styles.caseStudyLink}>
          View Case Study <span>→</span>
        </a>
      </div>

      <div
        className={`${styles.projectImageGroup} ${
          reverse ? styles.projectImageGroupRverse : ""
        }`}
      >
        <div className={styles.thumbWrapper}>
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Thumbnail"
              className={`${styles.thumbImg} ${
                img === mainImage ? styles.activeThumb : ""
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className={styles.projectImage}>
          <img
            src={mainImage}
            alt="Main Project Image"
            className={styles.mainImg}
          />
        </div>
      </div>
    </div>
  );
}
