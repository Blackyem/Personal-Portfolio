import { GithubIcon, LinkedinIcon, XIcon } from "@/BrightFrame/Icons";
import styles from "./FooterStyles.module.css";

const NAV_LINKS = [
  { label: "Home", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Blackyem", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-oladipupo",
    Icon: LinkedinIcon,
  },
  { label: "X", href: "https://x.com/Blackyem1", Icon: XIcon },
];

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              AHMED <span>OPEYEMI</span>
            </span>
            <p>Frontend Developer building modern web experiences.</p>
          </div>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.socials}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={21} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Ahmed Opeyemi Oladipupo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
