import styles from "../styles/WorkflowSection.module.css";

export default function WorkflowSection() {
    return (
        <section className={styles.workflowSection}>
            <div className={styles.header}>
                <div className={styles.subHeader}>
                    <span className={styles.headerIcon}>
                        <img src="STAR.svg" alt="STAR" />
                    </span>
                    <span className={styles.subtitle}>WORKING TOGETHER</span>
                </div>

                <h2 className={styles.title}>Go With The Workflow</h2>
            </div>

            <div className={styles.grid_top}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}> <img src="workflow1.svg" alt="workflow1" /></div>
                        <h3>STAND OUT INSTANTLY</h3>
                        <p>Professional design that gives your brand credibility from day one.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}><img src="workflow2.svg" alt="workflow2" /></div>
                        <h3>CLEAR, UPFRONT PRICING</h3>
                        <p>Fixed-scope projects with transparent costs—no hidden fees, no surprises.</p>
                    </div>

                    <div className={styles.card}>
                        <span className={styles.badge}>Available now</span>
                        <div className={styles.icon}><img src="workflow3.svg" alt="workflow3" /></div>
                        <h3>LAUNCH IN WEEKS, NOT MONTHS</h3>
                        <p>We design and build fast — most websites go live in just 3–4 weeks.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}><img src="workflow4.svg" alt="workflow4" /></div>
                        <h3>DESIGN WITH PURPOSE</h3>
                        <p>Intuitive, user-friendly design that makes your product effortless to understand.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}><img src="workflow5.svg" alt="workflow5" /></div>
                        <h3>PROVEN EXPERTISE</h3>
                        <p>A strong track record of delivering results across diverse industries.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}><img src="workflow6.svg" alt="workflow6" /></div>
                        <h3>RISK-FREE GUARANTEE</h3>
                        <p>If you’re not satisfied in the first week, I’ll return half of your deposit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
