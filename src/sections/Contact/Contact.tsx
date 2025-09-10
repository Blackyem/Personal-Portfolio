import { useForm, ValidationError } from '@formspree/react';
import styles from "@/sections/Contact/ContactStyles.module.css";

function Contact() {
  const [state, handleSubmit] = useForm("xovnrvez");

  if (state.succeeded) {
    return (
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <p className={`${styles.statusMessage} ${styles.success}`}>
          ✅ Thanks! Your message has been sent.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit} method="POST"> {/* <== important */}
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input id="name" type="text" name="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input id="email" type="email" name="email" placeholder="Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea id="message" name="message" placeholder="Message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button className="hover btn" type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
