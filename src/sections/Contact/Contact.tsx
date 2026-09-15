import { useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
  XIcon,
} from "@/BrightFrame/Icons";
import styles from "./ContactStyles.module.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Blackyem", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-oladipupo",
    Icon: LinkedinIcon,
  },
  { label: "X", href: "https://x.com/Blackyem1", Icon: XIcon },
];

const PHONE_NUMBER = "+2347036302496";
const PHONE_DISPLAY = "+234 703 630 2496";
const WHATSAPP_NUMBER = "2347036302496";
const WHATSAPP_MESSAGE =
  "Hi Ahmed! I'd like to discuss a project with you.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function Contact() {
  const [state, handleSubmit] = useForm("xovnrvez");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await handleSubmit(event);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.formCol}>
            <h2 className="sectionTitle">Let&apos;s Work Together</h2>
            <p className={styles.lead}>
              Have a project, opportunity, or idea you&apos;d like to discuss?
              I&apos;d love to hear from you.
            </p>

            {state.succeeded ? (
              <div className={styles.success}>
                <CheckCircle2 size={30} />
                <p>Thanks! Your message has been sent. I&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">
                      Name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btnPrimary ${styles.submit}`}
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <ArrowRight size={17} />}
                </button>

                {submitted && !state.succeeded && state.errors && (
                  <p className={styles.error}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          <aside className={styles.aside}>
            <h3 className={styles.asideTitle}>Get In Touch</h3>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Mail size={18} />
                </span>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a
                    className={styles.infoValue}
                    href="mailto:kolayem44@gmail.com"
                  >
                    kolayem44@gmail.com
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Phone size={18} />
                </span>
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <a className={styles.infoValue} href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <a
                  className={`${styles.infoIcon} ${styles.whatsappIcon}`}
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ahmed on WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <div>
                  <span className={styles.infoLabel}>WhatsApp</span>
                  <a
                    className={`${styles.infoValue} ${styles.whatsapp}`}
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>


              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <MapPin size={18} />
                </span>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}> Lagos, Nigeria</span>
                </div>
              </li>

              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Share2 size={18} />
                </span>
                <div>
                  <span className={styles.infoLabel}>Social</span>
                  <div className={styles.socials}>
                    {SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
