import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/BrightFrame/ThemeContext";
import styles from "./HeaderStyles.module.css";

const NAV_LINKS = [
  { label: "Home", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#showcase");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#showcase" className={styles.logo}>
          AHMED <span>OPEYEMI</span>
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? styles.active : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={`btn btnPrimary btnSm ${styles.talk}`}>
            Let&apos;s Talk
            <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className={styles.iconButton}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
        inert={!open}
      >
        <div className={styles.mobileMenuInner}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btnPrimary"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
