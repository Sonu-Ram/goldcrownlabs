// components/PricingSection.js
import styles from '../styles/PricingSection.module.css';

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.subHeader}>
        <span className={styles.headerIcon}>
          <img src="STAR.svg" alt="STAR" />
        </span>
        <span className={styles.subtitle}>OUR PRICING</span>
      </div>

      <h2 className={styles.title}>We'll Support You The Whole Way.</h2>

      <div className={styles.cardsWrapper}>
        {/* Landing Page */}
        <div className={`${styles.card} ${styles.leftCard}`}>
          <h3 className={styles.cardTitle}>LANDING PAGE</h3>
          <p className={styles.cardSubtitle}>Drive Conversions Effortlessly</p>
          <div className={styles.buttonandprice}>
            <button className={styles.button}>View Plans</button>
            <p className={styles.price}>Starting at <br /><strong>$199/m</strong></p>
          </div>

          <hr className={styles.dottedLine} />
          <p className={styles.includedTitle}>What’s Included:</p>
          <ul className={styles.features}>
            <li><span className={styles.check}>✓</span> Seamless Integration</li>
            <li><span className={styles.check}>✓</span> Conversion-Focused Design</li>
            <li><span className={styles.check}>✓</span> A/B Testing Ready</li>
            <li><span className={styles.check}>✓</span> Fast Loading Times</li>
            <li><span className={styles.check}>✓</span> Clear Call-to-Actions</li>
          </ul>
        </div>

        {/* Website Design */}
        <div className={`${styles.card} ${styles.mostPopular}`}>
          <div className={styles.popularBadge}>Most Popular</div>
          <h3 className={styles.cardTitle}>WEBSITE DESIGN</h3>
          <p className={styles.cardSubtitle}>Pixel-Perfect Design That Convert</p>
          <div className={styles.buttonandprice}>
            <button className={styles.button}>View Plans</button>
            <p className={styles.price}>Starting at <br /><strong>$699/m</strong></p>
          </div>

          <hr className={styles.dottedLine} />
          <p className={styles.includedTitle}>What’s Included:</p>
          <ul className={styles.features}>
            <li><span className={styles.check}>✓</span> Tailored Design</li>
            <li><span className={styles.check}>✓</span> SEO Optimized</li>
            <li><span className={styles.check}>✓</span> Fast Turnaround</li>
            <li><span className={styles.check}>✓</span> Responsive Across Devices</li>
            <li><span className={styles.check}>✓</span> Ongoing Support</li>
          </ul>
        </div>

        {/* All-in-One */}
        <div className={`${styles.card} ${styles.rightCard}`}>
          <h3 className={styles.cardTitle}>ALL-IN-ONE</h3>
          <p className={styles.cardSubtitle}>Creative Excellence, Unlimited Possibilities</p>
          <div className={styles.buttonandprice}>
            <button className={styles.button}>View Plans</button>
            <p className={styles.price}>Starting at <br /><strong>$20/h</strong></p>
          </div>

          <hr className={styles.dottedLine} />
          <p className={styles.includedTitle}>What’s Included:</p>
          <ul className={styles.features}>
            <li><span className={styles.check}>✓</span> Unlimited Users</li>
            <li><span className={styles.check}>✓</span> Unlimited Requests</li>
            <li><span className={styles.check}>✓</span> Easy Payments</li>
            <li><span className={styles.check}>✓</span> Pause or Cancel Anytime</li>
            <li><span className={styles.check}>✓</span> 4+ Time Zone Coverage</li>
          </ul>
        </div>
      </div>

      {/* Bottom Info */}
      <div className={styles.bottomFeatures}>
        <div className={styles.bottomFeaturesFirst}>
          <img src="pricing3.svg" alt="clock" />
          <p>Fast turnarounds</p>
        </div>
        <div className={styles.bottomFeaturesSecond}>
          <img src="pricing2.svg" alt="card" />
          <p>Transparent pricing</p>
        </div>
        <div className={styles.bottomFeaturesThird}>
          <img src="pricing1.svg" alt="satisfaction" />
          <p>Satisfaction guaranteed</p>
        </div>
      </div>
    </section>
  );
}
