"use client"

import type React from "react"


import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/atoms/input"
import { Textarea } from "@/components/atoms/textarea"
import { Button } from "@/components/atoms/button"
import { Card } from "@/components/atoms/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Get In Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Have questions about our tailoring services? Need help with an order? We're here to assist you with all
              your custom clothing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-balance text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                  Send Us a Message
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-light tracking-wide text-foreground">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="border-border/60 bg-background transition-colors focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-light tracking-wide text-foreground">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="border-border/60 bg-background transition-colors focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-light tracking-wide text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-border/60 bg-background transition-colors focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-light tracking-wide text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="border-border/60 bg-background transition-colors focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-light tracking-wide text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    rows={6}
                    required
                    className="resize-none border-border/60 bg-background transition-colors focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground transition-all hover:bg-accent/90 sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-balance text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                  Contact Information
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Reach out to us through any of these channels. We &apos re always happy to help with your tailoring
                  inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border/60 bg-card p-6 transition-all hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-light tracking-wide text-foreground">Location</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        123 Fashion Avenue
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-border/60 bg-card p-6 transition-all hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-light tracking-wide text-foreground">Phone</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-border/60 bg-card p-6 transition-all hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-light tracking-wide text-foreground">Email</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        contact@atelier-tailoring.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-border/60 bg-card p-6 transition-all hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-light tracking-wide text-foreground">Business Hours</h3>
                      <div className="mt-1 space-y-1 text-sm leading-relaxed text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="border-accent/20 bg-accent/5 p-6">
                <h3 className="font-light tracking-wide text-foreground">Need Assistance?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our team is ready to help you with measurements, fabric selection, design consultations, and any
                  questions about our services.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
                >
                  Call Us Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border/40 bg-secondary/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-muted">
            <div className="flex h-96 items-center justify-center">
              <p className="text-muted-foreground">Map placeholder - Integrate with Google Maps or Mapbox</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
