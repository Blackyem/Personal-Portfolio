import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "@/sections/Contact/ContactStyles.module.css";
function Contact() {
    return (_jsxs("section", { id: "contact", className: styles.container, children: [_jsx("h1", { className: "sectionTitle", children: "Contact" }), _jsxs("form", { action: "", children: [_jsxs("div", { className: "formGroup", children: [_jsx("label", { htmlFor: "name", hidden: true, children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", placeholder: "Name", required: true })] }), _jsxs("div", { className: "formGroup", children: [_jsx("label", { htmlFor: "email", hidden: true, children: "Email" }), _jsx("input", { type: "text", id: "email", name: "email", placeholder: "Email", required: true })] }), _jsxs("div", { className: "formGroup", children: [_jsx("label", { htmlFor: "message", hidden: true, children: "Message" }), _jsx("textarea", { id: "message", name: "message", placeholder: "Message", required: true })] }), _jsx("input", { className: "hover btn", type: "submit", value: "Submit" })] })] }));
}
export default Contact;
