import { useState } from "react";
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  const [selected, setSelected] = useState([]);
  const [email, setEmail] = useState("");
      console.log("selected:", selected);

  const options = [
    {
      id: "design",
      label: "Design",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682db4bba3920420fa65d776_check_design.svg",
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682db4bb08169e2e083eb412_check-marketing.svg",
    },
    {
      id: "software",
      label: "Software Development",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682d9efb08c31bead36c6552_check_software.svg",
    },
    {
      id: "nocode",
      label: "No-code dev",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682da51bf0abc53ce04689bd_check-no-code.svg",
    },
    {
      id: "copywriting",
      label: "Copywriting",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682da51b63bfe59bccd5847c_check-copyright.svg",
    },
    {
      id: "qa",
      label: "QA",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682da51b8fb49d9b26d76d8f_check-qa.svg",
    },
    {
      id: "notsure",
      label: "Not sure",
      icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/682d9efb08c31bead36c6552_check_software.svg",
    },
  ];


  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  function submitForm(e) {
    e.preventDefault();
    if (selected.length === 0 || email.trim() === "") {
      alert("Please select at least one option and enter your email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    } else {
      // Handle form submission
      console.log("Selected options:", selected);
      console.log("Email:", email);
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        {/* LEFT CONTENT */}
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            AI Driven Design,<br />Development & Marketing
          </h1>
          <p className={styles.description}>
            Since 2020, we’ve helped businesses across industries move faster, work smarter,
            and adapt with confidence. Our focus is on building agility, resilience, and
            efficiency—so you don’t just keep up, you stay ahead.
          </p>

          <div className={styles.btnGroup}>
            <button className={styles.primaryBtn}>Contact Us</button>
            <button className={styles.secondaryBtn}>Explore Services</button>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Create your project</h3>
          <p className={styles.formSubtitle}>What do you need help with?</p>

          <div className={styles.checkboxGrid}>
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`${styles.option} ${selected.includes(opt.id) ? styles.active : ""
                  }`}
                style={{ "--icon-url": `url(${opt.icon})` }}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt.id)}
                  onChange={() => toggleSelect(opt.id)}
                />
                <span className={styles.icon}></span>
                {opt.label}
              </label>
            ))}
          </div>

          <label htmlFor="email" className={styles.label}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className={styles.ctaButton} onClick={(e) => submitForm(e)}>
            <span className={styles.chevrons}>›››</span> Get started{" "}
            <span className={styles.chevronsReverse}>‹‹‹</span>
          </button>

          {/* <button className={styles.ctaButton}>
            <div className={styles.chevrons}>
              <img src="/chevron-right.svg" alt="" />
              <img src="/chevron-right.svg" alt="" />
              <img src="/chevron-right.svg" alt="" />
            </div>
            <span>Get started</span>
            <div className={styles.chevronsReverse}>
              <img src="/chevron-left.svg" alt="" />
              <img src="/chevron-left.svg" alt="" />
              <img src="/chevron-left.svg" alt="" />
            </div>
          </button> */}
        </div>
      </div>

      {/* MOCKUP IMAGE */}
      <div className={styles.mockupWrapper}>
        <img
          src="/banner_image.gif"
          alt="Animated project preview"
          className={styles.mockupImage}
        />
      </div>
    </section>
  );
}
