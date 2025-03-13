'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitQuoteRequest, type FormData } from "./actions"

export default function Home() {
  const [formState, setFormState] = useState<{
    isLoading: boolean
    success: boolean
    error: string | null
  }>({
    isLoading: false,
    success: false,
    error: null,
  })

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState({ isLoading: true, success: false, error: null })

    try {
      const result = await submitQuoteRequest(formData)
      if (result.success) {
        setFormState({ isLoading: false, success: true, error: null })
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
      } else {
        setFormState({ isLoading: false, success: false, error: result.error || "Something went wrong" })
      }
    } catch (error) {
      setFormState({
        isLoading: false,
        success: false,
        error: "An unexpected error occurred. Please try again.",
      })
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id]: value,
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0654.PNG-x4iDHuSzP4LGlRvzutfDs4oD4oKcO8.jpeg"
              alt="Premium Edge Curbing LLC Logo"
              width={240}
              height={80}
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100092278278851"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:flex">
              <Button>Get a Free Quote</Button>
            </Link>
            <a href="tel:5179606046" className="flex items-center gap-2 text-sm font-medium md:hidden">
              <Phone className="h-4 w-4" />
              <span className="sr-only">Call us</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container relative z-20 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-4 max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Transform Your Landscape With Premium Concrete Curbing
              </h1>
              <p className="text-xl text-white/90">
                Professional concrete landscape curbing for residential and commercial properties in Jackson, Michigan
                and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="#contact">
                  <Button size="lg" className="bg-[#5aff5a] hover:bg-[#4ae64a] text-black font-bold">
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href="#gallery">
                  <Button size="lg" className="bg-[#5aff5a] hover:bg-[#4ae64a] text-black font-bold">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
              alt="Concrete curbing example"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Curbing Services</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide high-quality concrete landscape curbing solutions for both residential and commercial
                properties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#5aff5a] transition-colors">
                <h3 className="text-xl font-bold mb-3">Residential Curbing</h3>
                <p className="text-muted-foreground">
                  Beautiful, continuous concrete curbing for your home's landscape. Perfect for garden borders,
                  flower beds, and lawn edges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#5aff5a] transition-colors">
                <h3 className="text-xl font-bold mb-3">Commercial Curbing</h3>
                <p className="text-muted-foreground">
                  Professional concrete curbing solutions for businesses, parks, and commercial properties.
                  Enhance your property's appearance and value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#5aff5a] transition-colors">
                <h3 className="text-xl font-bold mb-3">Custom Designs</h3>
                <p className="text-muted-foreground">
                  Choose from various colors, patterns, and textures to match your landscape design and
                  architectural style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Benefits of Concrete Curbing
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover why our concrete landscape curbing is the preferred choice for property owners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Maintenance-Free</h3>
                    <p className="text-muted-foreground">
                      Our concrete curbing eliminates the need for constant maintenance and replacement of traditional
                      edging materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Long-Lasting</h3>
                    <p className="text-muted-foreground">
                      Built to withstand Michigan's harsh weather conditions, our curbing maintains its beauty and
                      structural integrity for years.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Cost-Effective</h3>
                    <p className="text-muted-foreground">
                      While the initial investment may be higher than traditional edging, our concrete curbing pays
                      for itself through durability and reduced maintenance costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Professional Installation</h3>
                    <p className="text-muted-foreground">
                      Our experienced team ensures precise installation and attention to detail for every project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Customizable Design</h3>
                    <p className="text-muted-foreground">
                      Choose from various colors, patterns, and textures to perfectly match your landscape design.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Enhanced Property Value</h3>
                    <p className="text-muted-foreground">
                      Beautiful concrete curbing adds curb appeal and increases the value of your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Work</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse through some of our recent concrete curbing projects in Jackson, Michigan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
                  alt="Concrete curbing project 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
                  alt="Concrete curbing project 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
                  alt="Concrete curbing project 3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
                  alt="Concrete curbing project 4"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
                  alt="Concrete curbing project 5"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230822_115726.jpg-ieh86T2JYhdIrZd1ajYhQgSHnv6kT8.jpeg"
                  alt="Concrete curbing project 6"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Ready to transform your landscape? Get in touch with us for a free quote or to learn more about our services.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <div className="space-y-2">
                        <p>
                          Mike Pool:{" "}
                          <a href="tel:5172066295" className="hover:text-[#5aff5a]">
                            517-206-6295
                          </a>
                        </p>
                        <p>
                          Rob Fraser:{" "}
                          <a href="tel:5179606046" className="hover:text-[#5aff5a]">
                            517-960-6046
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <div className="space-y-2">
                        <p>
                          <a href="mailto:premiumedgecurbing@gmail.com" className="hover:text-[#5aff5a]">
                            premiumedgecurbing@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#5aff5a] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <div className="space-y-2">
                        <p>
                          Jackson, Michigan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Request a Free Quote</h3>
                {formState.success ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-[#5aff5a] mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                    <p className="text-muted-foreground">
                      We've received your quote request and will get back to you shortly.
                    </p>
                    <Button
                      className="mt-4 bg-[#5aff5a] hover:bg-[#4ae64a] text-black font-bold"
                      onClick={() =>
                        setFormState({ isLoading: false, success: false, error: null })
                      }
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formState.error && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
                        {formState.error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#5aff5a] hover:bg-[#4ae64a] text-black font-bold"
                      disabled={formState.isLoading}
                    >
                      {formState.isLoading ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:5172066295" className="hover:text-[#5aff5a]">517-206-6295</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:premiumedgecurbing@gmail.com" className="hover:text-[#5aff5a]">
                    premiumedgecurbing@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Jackson, Michigan
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Monday - Friday: 7am - 6pm
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Saturday: 8am - 4pm
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100092278278851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#5aff5a]"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Premium Edge Curbing LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 