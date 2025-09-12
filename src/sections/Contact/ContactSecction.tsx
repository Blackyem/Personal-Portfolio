"use client"

// All required dependencies are installed: @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge, lucide-react, @formspree/react

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { Card, CardContent } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { MessageCircle, Mail, Phone, MapPin, Send, Rocket, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [state, handleSubmit] = useForm("xovnrvez")

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss building something great together.")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 16px",
        background: "var(--background-color)",
        fontFamily: "var(--font-main)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <Rocket style={{ width: "32px", height: "32px", color: "var(--btn-color)" }} className="animate-float" />
            <Badge variant="secondary" style={{ padding: "8px 16px", fontSize: "14px", fontWeight: "500" }}>
              Let's Connect
            </Badge>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "var(--text-color)",
              lineHeight: "1.1",
            }}
          >
            LET'S BUILD SOMETHING GREAT TOGETHER 🚀
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "var(--form-text-color)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Drop me a message and I'll get back to you within 24h.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Quick Contact Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* WhatsApp Card - Removed blinking animation and added proper styling */}
            <Card
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "2px solid var(--border)",
                backgroundColor: "var(--card)",
              }}
              onClick={handleWhatsAppClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)"
                e.currentTarget.style.borderColor = "#25d366"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"
                e.currentTarget.style.borderColor = "var(--border)"
              }}
            >
              <CardContent style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#25d366",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <MessageCircle style={{ width: "24px", height: "24px", color: "white" }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: "600", fontSize: "18px", color: "var(--text-color)", margin: "0" }}>
                      WhatsApp
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--form-text-color)", margin: "0" }}>Instant response</p>
                  </div>
                </div>
                <p style={{ fontSize: "14px", color: "var(--form-text-color)", marginBottom: "12px" }}>
                  Need a quick response? Message me directly on WhatsApp for instant communication.
                </p>
                <Badge
                  variant="outline"
                  style={{
                    color: "#25d366",
                    borderColor: "#25d366",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Clock style={{ width: "12px", height: "12px" }} />
                  Chat on WhatsApp
                </Badge>
              </CardContent>
            </Card>

            {/* Other Contact Methods */}
            <Card
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <CardContent style={{ padding: "24px" }}>
                <h3 style={{ fontWeight: "600", fontSize: "18px", marginBottom: "16px", color: "var(--text-color)" }}>
                  Other Ways to Reach Me
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Mail style={{ width: "20px", height: "20px", color: "var(--btn-color)" }} />
                  <div>
                    <p style={{ fontWeight: "500", margin: "0", color: "var(--text-color)" }}>Email</p>
                    <p style={{ fontSize: "14px", color: "var(--form-text-color)", margin: "0" }}>hello@example.com</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Phone style={{ width: "20px", height: "20px", color: "var(--btn-color)" }} />
                  <div>
                    <p style={{ fontWeight: "500", margin: "0", color: "var(--text-color)" }}>Phone</p>
                    <p style={{ fontSize: "14px", color: "var(--form-text-color)", margin: "0" }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "8px" }}
                >
                  <MapPin style={{ width: "20px", height: "20px", color: "var(--btn-color)" }} />
                  <div>
                    <p style={{ fontWeight: "500", margin: "0", color: "var(--text-color)" }}>Location</p>
                    <p style={{ fontSize: "14px", color: "var(--form-text-color)", margin: "0" }}>
                      Available worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div style={{ gridColumn: "span 2" }}>
            <Card
              style={{
                backgroundColor: "var(--card)",
                border: "2px solid var(--border)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <CardContent style={{ padding: "32px" }}>
                <div style={{ marginBottom: "24px" }}>
                  <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px", color: "var(--text-color)" }}>
                    SEND A MESSAGE
                  </h2>
                  <p style={{ color: "var(--form-text-color)" }}>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {state.succeeded ? (
                  <div style={{ textAlign: "center", padding: "48px 0" }}>
                    <CheckCircle
                      style={{ width: "64px", height: "64px", color: "#10b981", margin: "0 auto 16px" }}
                      className="animate-checkmark"
                    />
                    <h3
                      style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px", color: "var(--text-color)" }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: "var(--form-text-color)" }}>
                      Thanks! Your message has been sent successfully. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "24px",
                      }}
                    >
                      <div>
                        <label
                          htmlFor="name"
                          style={{
                            display: "block",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginBottom: "8px",
                            color: "var(--text-color)",
                          }}
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          style={{
                            height: "48px",
                            border: "2px solid var(--border)",
                            backgroundColor: "var(--background-color)",
                            color: "var(--form-text-color)",
                            fontSize: "16px",
                            fontFamily: "var(--font-main)",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            display: "block",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginBottom: "8px",
                            color: "var(--text-color)",
                          }}
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          style={{
                            height: "48px",
                            border: "2px solid var(--border)",
                            backgroundColor: "var(--background-color)",
                            color: "var(--form-text-color)",
                            fontSize: "16px",
                            fontFamily: "var(--font-main)",
                          }}
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "8px",
                          color: "var(--text-color)",
                        }}
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        rows={6}
                        style={{
                          border: "2px solid var(--border)",
                          backgroundColor: "var(--background-color)",
                          color: "var(--form-text-color)",
                          fontSize: "16px",
                          fontFamily: "var(--font-main)",
                          resize: "none",
                        }}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      style={{
                        width: "100%",
                        height: "48px",
                        fontSize: "18px",
                        fontWeight: "600",
                        backgroundColor: "var(--btn-color)",
                        color: "var(--btn-text-color)",
                        border: "none",
                        borderRadius: "8px",
                        cursor: state.submitting ? "not-allowed" : "pointer",
                        opacity: state.submitting ? 0.5 : 1,
                        transition: "all 0.2s ease",
                        fontFamily: "var(--font-main)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      {state.submitting ? (
                        <>
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              border: "2px solid var(--btn-text-color)",
                              borderTop: "2px solid transparent",
                              borderRadius: "50%",
                              animation: "spin 1s linear infinite",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send style={{ width: "20px", height: "20px" }} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "64px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "var(--secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px", color: "var(--text-color)" }}>
            Quick Response Guarantee
          </h3>
          <p style={{ color: "var(--form-text-color)", marginBottom: "16px" }}>
            I typically respond within 2-4 hours during business days
          </p>
          <p style={{ fontSize: "14px", color: "var(--footer-text-color)", margin: "16px 0 0 0" }}>
            © 2025 Oladipupo Ahmed Opeyemi. All rights reserved.
          </p>
        </div>
      </div>

     
    </section>
  )
}
