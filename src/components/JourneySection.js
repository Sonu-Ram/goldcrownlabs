import React, { useEffect } from 'react';
import styles from '../styles/JourneySection.module.css';

const JourneySection = () => {
    useEffect(() => {
        const mainDiv = document.querySelector(`.${styles.skewContainer}`);
        if (!mainDiv) return;

        const transformDivs = mainDiv.querySelectorAll(`.${styles.eTransform}`);

        function removeSkew() {
            transformDivs.forEach(div => {
                div.style.transform = 'skew(0deg, 0deg)';
                div.style.transition = 'transform 0.4s ease';
            });
            mainDiv.classList.add(styles.skewRemoved);
        }

        mainDiv.addEventListener('mouseenter', removeSkew);
        mainDiv.addEventListener('touchstart', () => {
            if (!mainDiv.classList.contains(styles.skewRemoved)) {
                removeSkew();
            }
        });
    }, []);

    return (
        <div className={styles.journeyWrapper}>
            <h2 className={styles.heading}>Where Are We In Your Journey?</h2>
            <div className={styles.skewContainer}>
                <div className={`${styles.card} ${styles.eTransform} ${styles.first}`}>
                    <img src="journey1.svg" alt="journey1" />
                    <h3>Going<br /> Zero to One</h3>
                    <p>
                        If you're navigating a new business unit, or a new venture entirely, breaking into a new market.
                    </p>
                </div>
                <div className={`${styles.card} ${styles.eTransform} ${styles.second}`}>
                    <img src="journey2.svg" alt="journey2" />
                    <h3>Scaling<br /> from 0 to 100</h3>
                    <p>
                        If you've achieved Product / Service Market Fit are looking to scale your business to new heights.
                    </p>
                </div>
                <div className={`${styles.card} ${styles.eTransform} ${styles.third}`}>
                    <img src="journey3.svg" alt="journey3" />
                    <h3>Need Quick<br /> Solutions</h3>
                    <p>
                        If you know exactly what you want and need a team that can step-in and quickly help you with it.
                    </p>
                </div>
            </div>

            <div className={styles.deliverySection}>
                <h3>We deliver on time, in days and weeks—not months.</h3>
                <div className={styles.deliverySectionStart}>
                    <div className={styles.steps}>
                        <div >
                            <span>01</span>
                            <div>
                                <h4>Fast Start</h4>
                                <p>We kick off quickly with a clear plan.</p>
                            </div>
                        </div>
                        <div >
                            <span>02</span>
                            <div>
                                <h4>Design + Dev, Together</h4>
                                <p>Our teams work side by side to move faster.</p>
                            </div>
                        </div>
                        <div >
                            <span>03</span>
                            <div>
                                <h4>Quick Feedback, Quick Changes</h4>
                                <p>We share progress early and improve fast.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <blockquote>
                            “Goldcrown Labs is an exceptional design partner, combining strong UI craftsmanship with thoughtful UX strategy. Highly recommended.”
                        </blockquote>
                        <div className={styles.person}>
                            <img src="journey.png" alt="Helena Turpin" />
                            <div>
                                <strong>Helena Turpin</strong>
                                <p>CEO & Founder @xyz</p>
                            </div>
                        </div>
                        <button className={styles.callToAction}>Book a call <span>→</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneySection;
