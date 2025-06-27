import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "@/sections/Showcase/ShowcaseStyles.module.css";
import BlackyemIMG2 from "@/assets/BlackyemIMG2.png";
import sun from "@/assets/sun.svg";
import moon from "@/assets/moon.svg";
import githubLight from "@/assets/github-light.svg";
import githubDark from "@/assets/github-dark.svg";
import twitterLight from "@/assets/twitter-light.svg";
import twitterDark from "@/assets/twitter-dark.svg";
import linkedinLight from "@/assets/linkedin-light.svg";
import linkedinDark from "@/assets/linkedin-dark.svg";
import OladipupoCV from "@/assets/Oladipupo-CV.pdf";
import { useTheme } from "@/BrightFrame/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
function Showcase() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === "light" ? sun : moon;
    const twitterIcon = theme === "light" ? twitterLight : twitterDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const linkdinIcon = theme === "light" ? linkedinLight : linkedinDark;
    return (_jsxs("section", { id: "showcase", className: styles.container, children: [_jsxs("div", { className: styles.colorModeContainer, children: [_jsx("img", { className: styles.showcase, src: BlackyemIMG2, alt: "Profile picture" }), _jsx("img", { className: styles.colorMode, src: themeIcon, alt: "Color mode icon", onClick: toggleTheme })] }), _jsxs("div", { className: styles.info, children: [_jsxs("h1", { children: ["Ahmed", _jsx("br", {}), "Opeyemi", _jsx("br", {}), "Oladipupo"] }), _jsx("span", { style: {
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            fontStyle: "italic",
                            color: "#10B981",
                            letterSpacing: "0.5px",
                            marginTop: "1rem",
                            textAlign: "left",
                            minHeight: "1.2em",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                        }, children: _jsx(Typewriter, { words: [
                                "Full-Stack Web Developer",
                                "E-Commerce Solution Builder",
                                "Responsive Web Specialist",
                                "Performance-Driven Engineer",
                            ], loop: 0, cursor: false, typeSpeed: 50, deleteSpeed: 60, delaySpeed: 3000 }) }), _jsxs("span", { children: [_jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: twitterIcon, alt: "Twitter icon" }) }), _jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: githubIcon, alt: "Github icon" }) }), _jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: linkdinIcon, alt: "LinkedIn icon" }) })] }), _jsx("p", { className: styles.description, children: "Full-stack developer specializing in responsive, high-performance websites and applications from custom business sites to e-commerce platforms. I deliver clean, scalable code and user-friendly designs that bring ideas to life." }), _jsx("a", { href: OladipupoCV, download: true, children: _jsx("button", { className: "hover", children: "Resume" }) })] })] }));
}
export default Showcase;
