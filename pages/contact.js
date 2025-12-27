// pages/contact.js
import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { theme, cn } from '../styles/theme.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xdoqnlzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: 'general', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={cn('min-h-screen', theme.colors.bg.primary)}>
      {/* Navigation */}
      <nav className={theme.components.nav.container}>
        <div className={theme.spacing.container}>
          <div className="py-4 flex justify-between items-center">
            <div className={cn('text-2xl font-bold', theme.colors.text.primary)}>BuildNext</div>
            <div className="flex gap-8">
              <a href="/" className={theme.components.nav.link}>Home</a>
              <a href="/services" className={theme.components.nav.link}>Services</a>
              <a href="/about" className={theme.components.nav.link}>About</a>
              <a href="/contact" className={theme.components.nav.linkActive}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={theme.spacing.container}>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className={cn(theme.typography.h1, 'mb-6')}>
              Let's <span className={theme.colors.text.secondary}>Connect</span>
            </h1>
            <p className={cn(theme.typography.body, 'leading-relaxed')}>
              Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className={cn(theme.components.card.primary, 'p-8')}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className={cn(theme.colors.bg.tertiary, 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6')}>
                    <Send className={theme.colors.accent.primary} size={40} />
                  </div>
                  <h3 className={cn(theme.typography.h3, 'mb-4')}>Message Sent!</h3>
                  <p className={cn(theme.colors.text.secondary, 'mb-6')}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={cn(theme.colors.text.secondary, 'hover:text-gray-300 transition')}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className={theme.components.input.label}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={theme.components.input.base}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={theme.components.input.label}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={theme.components.input.base}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className={theme.components.input.label}>
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={theme.components.input.base}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className={theme.components.input.label}>
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={theme.components.input.base}
                    >
                      <option value="general" className={theme.colors.bg.secondary}>General Inquiry</option>
                      <option value="buildnext" className={theme.colors.bg.secondary}>BuildNext - Project Development</option>
                      <option value="intern" className={theme.colors.bg.secondary}>BuildMore - Intern Tier</option>
                      <option value="junior" className={theme.colors.bg.secondary}>BuildMore - Junior Dev Tier</option>
                      <option value="senior" className={theme.colors.bg.secondary}>BuildMore - Senior Dev Tier</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={theme.components.input.label}>
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={cn(theme.components.input.base, 'resize-none')}
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className={cn(theme.buttons.primary, 'w-full font-semibold px-6 py-4 rounded-lg transition flex items-center justify-center gap-2 text-lg')}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info & Additional Details */}
            <div className="space-y-8">
              <div className={cn(theme.components.card.primary, 'p-8')}>
                <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                  <Mail className={theme.components.icon.color} size={28} />
                </div>
                <h2 className={cn(theme.typography.h3, 'mb-4')}>Email Us Directly</h2>
                <p className={cn(theme.colors.text.secondary, 'mb-4')}>
                  Prefer to email? Reach out to us directly at:
                </p>
                <a
                  href="mailto:yasir@buildnext.org"
                  className={cn(theme.colors.text.primary, 'hover:text-gray-300 text-lg font-semibold transition')}
                >
                  yasir@buildnext.org
                </a>
              </div>

              <div className={cn(theme.components.card.primary, 'p-8')}>
                <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                  <MessageSquare className={theme.components.icon.color} size={28} />
                </div>
                <h2 className={cn(theme.typography.h3, 'mb-4')}>What Happens Next?</h2>
                <ul className={cn('space-y-3', theme.colors.text.secondary)}>
                  <li className="flex items-start gap-3">
                    <div className={cn('w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1', theme.colors.bg.tertiary)}>
                      <span className={cn('text-sm font-bold', theme.colors.text.secondary)}>1</span>
                    </div>
                    <span>We'll review your message and respond within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={cn('w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1', theme.colors.bg.tertiary)}>
                      <span className={cn('text-sm font-bold', theme.colors.text.secondary)}>1</span>
                    </div>
                    <span>Schedule a discovery call to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={cn('w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1', theme.colors.bg.tertiary)}>
                      <span className={cn('text-sm font-bold', theme.colors.text.secondary)}>3</span>
                    </div>
                    <span>Receive a customized proposal and timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={cn('w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1', theme.colors.bg.tertiary)}>
                      <span className={cn('text-sm font-bold', theme.colors.text.secondary)}>4</span>
                    </div>
                    <span>Start building your project with our expert team</span>
                  </li>
                </ul>
              </div>

              <div className={cn(theme.components.card.primary, 'p-8')}>
                <h3 className={cn('text-xl font-bold mb-4', theme.colors.text.primary)}>Quick Facts</h3>
                <ul className={cn('space-y-2', theme.colors.text.tertiary)}>
                  <li>✓ Response time: Within 24 hours</li>
                  <li>✓ Free initial consultation</li>
                  <li>✓ No obligation proposals</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Flexible engagement models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={cn(theme.components.footer.container, 'mt-20')}>
        <div className={theme.spacing.container}>
          <div className="py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className={cn(theme.colors.text.primary, 'font-bold text-lg mb-4')}>BuildNext</h3>
                <p className={cn(theme.components.footer.text, 'text-sm')}>Elite software delivery for modern businesses.</p>
              </div>
              <div>
                <h4 className={cn(theme.colors.text.primary, 'font-semibold mb-4')}>Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className={cn(theme.components.footer.text, theme.components.footer.link)}>BuildNext</a></li>
                  <li><a href="/services" className={cn(theme.components.footer.text, theme.components.footer.link)}>BuildMore</a></li>
                </ul>
              </div>
              <div>
                <h4 className={cn(theme.colors.text.primary, 'font-semibold mb-4')}>Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className={cn(theme.components.footer.text, theme.components.footer.link)}>About</a></li>
                  <li><a href="/contact" className={cn(theme.components.footer.text, theme.components.footer.link)}>Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className={cn(theme.colors.text.primary, 'font-semibold mb-4')}>Contact</h4>
                <p className={cn(theme.components.footer.text, 'text-sm')}>yasir@buildnext.org</p>
              </div>
            </div>
            <div className={cn(theme.colors.border.primary, 'border-t pt-8 text-center text-sm', theme.components.footer.text)}>
              <p>© 2024 BuildNext. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}