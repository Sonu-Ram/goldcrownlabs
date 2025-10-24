import styles from '../styles/LogoCarousel.module.css';

export default function LogoCarousel() {
  const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    '/logo7.png',
    '/logo8.png',
    '/logo9.png',
    '/logo10.png',
    '/logo11.png',
    '/logo12.png',
    '/logo13.png',
  ];

  const scrollingLogos = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className={styles.wrapper}>
      <div className={styles.textSection}>
        <p>Trusted by 50+ global<br /> companies</p>
      </div>
      <div className={styles.divider} />
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {scrollingLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
