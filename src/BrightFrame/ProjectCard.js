import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ProjectCard({ src, link, h3, p }) {
    return (_jsxs("a", { href: link, target: "_blank", children: [_jsx("img", { className: "hover", src: src, alt: `${h3} logo` }), _jsx("h3", { children: h3 }), _jsx("p", { children: p })] }));
}
export default ProjectCard;
