import { useState, useEffect } from "react";
import styles from "../styles/HeroSection.module.css";
import Link from "next/link";

export default function HeroSection() {
  const [masterRequirements, setMasterRequirements] = useState([]);
  const [selected, setSelected] = useState([]);
  const [email, setEmail] = useState("");
  console.log("selected:", selected);

  useEffect(() => {
    fetchMasterRequirements();
  }, []);


  const fetchMasterRequirements = async () => {
    try {
      const res = await fetch("/api/masterrequirments/getall");
      if (!res.ok) return;
      const data = await res.json();
      setMasterRequirements(data);
    } catch (err) {
      console.error("Failed to fetch master requirements", err);
    }
  };


  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  async function submitForm(e) {
    e.preventDefault();
    if (selected.length === 0 || email.trim() === "") {
      alert("Please select at least one option and enter your email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    } else {
      // Handle form submission
      console.log("Selected masterRequirements:", selected);
      console.log("Email:", email);
      try {
        const res = await fetch("/api/customers/insert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            requirements: selected,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          console.error("Error:", errData);
          alert("Failed to submit form");
          return;
        }

        const data = await res.json();
        console.log("✅ Submitted successfully:", data);
        alert("Form submitted successfully!");
        setSelected([]);
        setEmail("");
      } catch (err) {
        console.error("❌ Failed to submit form:", err);
        alert("Something went wrong. Please try again.");
      }
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
            <button className={styles.primaryBtn}> <Link href="/contactus" >Contact Us</Link></button>
            <button className={styles.secondaryBtn}>Explore Services</button>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Create your project</h3>
          <p className={styles.formSubtitle}>What do you need help with?</p>

          <div className={styles.checkboxGrid}>
            {masterRequirements.length > 0 && masterRequirements.map((opt) => (
              <label
                key={opt.MasterRequirmentID}
                className={`${styles.option} ${selected.includes(opt.MasterRequirmentID) ? styles.active : ""
                  }`}
                style={{ "--icon-url": `url(${opt.MasterRequirmentIcon})` }}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt.MasterRequirmentID)}
                  onChange={() => toggleSelect(opt.MasterRequirmentID)}
                />
                <span className={styles.icon}></span>
                {opt.MasterRequirmentLable}
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

          {/* <button className={styles.ctaButton} onClick={(e) => submitForm(e)}>
            <span className={styles.chevrons}>›››</span> Get started{" "}
            <span className={styles.chevronsReverse}>‹‹‹</span>
          </button> */}

          <button className={styles.ctaButton} onClick={(e) => submitForm(e)}>
            <div className={styles.chevrons}>
              <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa5a_animation-chevron.svg" alt="" />
              <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa5a_animation-chevron.svg" alt="" />
              <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa5a_animation-chevron.svg" alt="" />
            </div>
            <span>Get started</span>
            <div className={styles.chevronsReverse}>
              <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa5b_animation-chevron-reverse.svg" alt="" />
              <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa5b_animation-chevron-reverse.svg" alt="" />
              <img src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaa5b_animation-chevron-reverse.svg" alt="" />
            </div>
          </button>
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
