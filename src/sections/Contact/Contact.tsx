"use client";

import styles from "@/sections/Contact/ContactStyles.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xovnrvez");

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      {state.succeeded ? (
        <p className={styles.success}>
          Thanks! Your message has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" hidden>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email" hidden>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message" hidden>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <input
            className="hover btn"
            type="submit"
            value={state.submitting ? "Sending..." : "Submit"}
            disabled={state.submitting}
          />
        </form>
      )}
    </section>
  );
}

export default Contact;
