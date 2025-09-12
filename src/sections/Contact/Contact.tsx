"use client"

import { useForm, ValidationError } from "@formspree/react"
import { MessageCircle, Phone, Mail, MapPin, Send, Check } from "lucide-react"

function Contact() {
  const [state, handleSubmit] = useForm("xovnrvez")

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-12 shadow-xl border border-border">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600 animate-checkmark" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Message Sent!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thanks! Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with you.")
    const phoneNumber = "1234567890" // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's build something great together
            <span className="inline-block ml-4 animate-float">🚀</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Drop me a message and I'll get back to you within 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none text-foreground placeholder:text-muted-foreground"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2 group"
              >
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-xl whatsapp-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                  <p className="text-green-100">Instant response</p>
                </div>
              </div>
              <p className="text-green-100 mb-6">
                Need a quick response? Message me directly on WhatsApp for instant communication.
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </button>
            </div>

            {/* Other Contact Methods */}
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Other Ways to Reach Me</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white text-center">
              <h4 className="text-lg font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-white/90">I typically respond within 2-4 hours during business days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
