import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function SkillList({ src, skills }) {
    return (_jsxs("span", { children: [_jsx("img", { src: src, alt: "Checkmark Icon" }), _jsx("p", { children: skills })] }));
}
export default SkillList;
