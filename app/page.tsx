'use client';
import Header from './components/Header';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Home() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('');
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        formRef.current?.reset();
      } else {
        console.error('Server response:', result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      text: "The work done by Premium Edge Curbing is exceptional! Our landscape looks much nicer with an edging between the mulched areas and grass, besides making it easier to mow. The workers arrived when expected, worked with precision and left us with a very clean site. This is an honest company and we highly recommend them.",
      author: "Sandra Brockie",
      location: "Jackson, MI",
      rating: 5
    },
    {
      text: "We are so happy with the work that Premium Edge Curbing did at our new home. We are excited to have a beautiful barrier between the grass that we mow and the landscaping around the house. We were able to do a good portion of the perimeter around the house and hope to have the crew back out to do more work for us in the future! Highly recommend!",
      author: "Betsi Moulios",
      location: "Jackson, MI",
      rating: 5
    },
    {
      text: "Excellent work!! Great honest company. I would highly recommend them.",
      author: "Kenneth Coolbaugh",
      location: "Jackson, MI",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-16 pb-16 relative min-h-[600px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/front-entrance-curbing.jpg"
              alt="Premium Edge Curbing Background"
              fill
              className="object-cover object-[center_85%]"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto px-4 py-16 relative">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Transform Your Landscape With Premium Concrete Curbing
              </h1>
              <p className="text-xl mb-8 text-white">
                Professional concrete landscape curbing for residential and commercial properties in Jackson, Michigan and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#d8f84a] text-stone-900 px-8 py-3 rounded-md font-semibold hover:bg-[#c4e842] transition-colors"
                >
                  Get a Free Quote
                </button>
                <button 
                  onClick={() => {
                    const gallerySection = document.getElementById('gallery');
                    if (gallerySection) {
                      gallerySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-[#d8f84a] text-[#d8f84a] px-8 py-3 rounded-md font-semibold hover:bg-[#d8f84a] hover:text-stone-900 transition-colors"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-stone-800">Our Curbing Services</h2>
            <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
              We provide high-quality concrete landscape curbing solutions for both residential and commercial properties.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-[#d8f84a]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-800">Residential Curbing</h3>
                <p className="text-stone-600">
                  Enhance your home's landscape with decorative concrete curbing that adds beauty and value to your property.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-[#d8f84a]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-800">Commercial Curbing</h3>
                <p className="text-stone-600">
                  Professional curbing solutions for businesses, office parks, and commercial properties that enhance curb appeal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-[#d8f84a]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-800">Custom Designs</h3>
                <p className="text-stone-600">
                  Choose from various colors, patterns, and textures to create a unique look that complements your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-stone-800">Benefits of Concrete Curbing</h2>
            <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
              Discover why our concrete landscape curbing is the preferred choice for property owners.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-800">Durable & Long-Lasting</h3>
                <p className="text-stone-600">Our concrete curbing is built to last for years, withstanding harsh weather conditions and seasonal changes.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-800">Low Maintenance</h3>
                <p className="text-stone-600">Unlike traditional edging, our concrete curbing requires minimal upkeep and stays in place year after year.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-800">Weed Control</h3>
                <p className="text-stone-600">Creates a barrier that helps prevent grass and weeds from invading your garden beds and landscaped areas.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-800">Enhances Property Value</h3>
                <p className="text-stone-600">Adds a professional, finished look to your landscape that can increase your property's curb appeal and value.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-800">Customizable Options</h3>
                <p className="text-stone-600">Available in various colors, patterns, and styles to match your existing landscape and architectural design.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-800">Mowing Edge</h3>
                <p className="text-stone-600">Creates a clean mowing edge that eliminates the need for string trimming and makes lawn maintenance easier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section id="gallery" className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-stone-800">Our Work</h2>
            <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
              Browse through some of our recent concrete curbing projects in Jackson, Michigan.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tree-island-curbing.jpg"
                  alt="Custom tree island with black concrete curbing"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">Tree Island Curbing</h3>
                  <p className="text-white/80">Elegant black curbing defining a tree island landscape</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/decorative-entrance-curbing.jpg"
                  alt="Decorative entrance curbing with landscaping"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">Front Entrance Design</h3>
                  <p className="text-white/80">Beautiful curved curbing creating an inviting pathway</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/curved-garden-border.jpg"
                  alt="Curved garden border with landscaping"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">Garden Border Design</h3>
                  <p className="text-white/80">Elegant curved borders that enhance your garden's beauty</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/patio-area-border.jpg"
                  alt="Patio area with decorative curbing border"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">Patio Area Curbing</h3>
                  <p className="text-white/80">Professional curbing that defines your outdoor living space</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-[#111827]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Customer Reviews</h2>
            <p className="text-stone-300 text-center mb-12 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about our work.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="bg-stone-900/50 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#d8f84a]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-stone-300 mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-[#d8f84a]/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#d8f84a] font-semibold">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-stone-300">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-8">
              <div className="relative h-24 w-96 mb-6">
                <Image
                  src="/images/rock-garden-border.jpg"
                  alt="Premium Edge Curbing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-center text-stone-800">Why Choose Premium Edge Curbing?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d8f84a] mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2 text-stone-800">Experienced Professionals</h3>
                <p className="text-stone-600">
                  Our team has years of experience in concrete curbing installation for both residential and commercial properties.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d8f84a] mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2 text-stone-800">Quality Materials</h3>
                <p className="text-stone-600">
                  We use only high-quality concrete mixes and reinforcement materials to ensure durability and longevity.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d8f84a] mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2 text-stone-800">Customer Satisfaction</h3>
                <p className="text-stone-600">
                  We pride ourselves on delivering exceptional service and results that exceed our customers' expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-stone-800">Contact Us</h2>
              <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
                Ready to transform your landscape? Get in touch with us for a free quote or to learn more about our services.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-stone-800">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-800">Phone</h4>
                      <div className="flex items-center gap-2 text-stone-600">
                        <svg className="w-5 h-5 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p>Mike Pool: 517-206-6295</p>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600">
                        <svg className="w-5 h-5 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p>Rob Fraser: 517-960-6046</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">Email</h4>
                      <div className="flex items-center gap-2 text-stone-600">
                        <svg className="w-5 h-5 text-[#d8f84a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:premiumedgecurbing@gmail.com" className="hover:text-[#d8f84a] transition-colors">
                          premiumedgecurbing@gmail.com
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">Location</h4>
                      <p className="text-stone-600">Serving Jackson, Michigan and surrounding areas</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">Business Hours</h4>
                      <p className="text-stone-600">Monday - Friday: 6:00 AM - 7:00 PM</p>
                      <p className="text-stone-600">Saturday: 8:00 AM - 7:00 PM</p>
                      <p className="text-stone-600">Sunday: Closed</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">Social Media</h4>
                      <a 
                        href="https://www.facebook.com/profile.php?id=100092278278851"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-stone-600 hover:text-[#d8f84a] transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Follow us on Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-stone-800">Request a Free Quote</h3>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-600 mb-1">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          required
                          className="w-full px-3 py-2 border border-stone-300 rounded-md" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-600 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          required
                          className="w-full px-3 py-2 border border-stone-300 rounded-md" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-stone-300 rounded-md" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full px-3 py-2 border border-stone-300 rounded-md" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-1">Project Type</label>
                      <select 
                        name="projectType"
                        required
                        className="w-full px-3 py-2 border border-stone-300 rounded-md"
                      >
                        <option value="">Select project type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-1">Message</label>
                      <textarea 
                        name="message"
                        required
                        className="w-full px-3 py-2 border border-stone-300 rounded-md h-32"
                      ></textarea>
                    </div>
                    {formStatus === 'success' && (
                      <div className="text-[#d8f84a] font-medium">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    {formStatus === 'error' && (
                      <div className="text-red-600 font-medium">
                        Sorry, there was an error sending your message. Please try again.
                      </div>
                    )}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#d8f84a] text-stone-900 py-3 rounded-md font-semibold hover:bg-[#c4e842] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to enhance your landscape?</h2>
            <p className="text-xl mb-8">Contact us today for a free consultation and quote.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:517-206-6295" className="bg-[#d8f84a] text-stone-900 px-8 py-3 rounded-md font-semibold hover:bg-[#c4e842] transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Mike Pool: 517-206-6295
              </a>
              <a href="tel:517-960-6046" className="bg-[#d8f84a] text-stone-900 px-8 py-3 rounded-md font-semibold hover:bg-[#c4e842] transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Rob Fraser: 517-960-6046
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 
