// pages/services.js
import React from 'react';
import { Smartphone, Bot, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Globe, Palette, Network } from 'lucide-react';
import { theme, cn } from '../styles/theme.js';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== SAME BACKGROUND AS HOME ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/25 blur-[140px]" />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/25 blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[25%] w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[160px]" />
      </div>

      {/* ===== NAV ===== */}
      <Navbar />

      {/* Hero Section */}
      <section className={theme.spacing.container}>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className={cn(theme.typography.h1, 'mb-6')}>
              BuildNext: End-to-End Development
            </h1>
            <p className={cn(theme.typography.body, 'leading-relaxed')}>
              Tailored development solutions for your unique business needs.
            </p>
            <p className={theme.typography.body}>
              From one-time builds to ongoing subscriptions, we've got your development needs covered.
            </p>
          </div>
        </div>
      </section>

      {/* BuildNext Services */}
      <section className={theme.spacing.container}>
        <div className="py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                {
                  icon: <Globe size={24} />,
                  title: 'Website Development',
                  desc: 'Full front-end and back-end (server-side) website development using modern, scalable technologies.',
                },
                {
                  icon: <Smartphone size={24} />,
                  title: 'Mobile App Development',
                  desc: 'Native and cross-platform mobile applications for both iOS and Android.',
                },
                {
                  icon: <Bot size={24} />,
                  title: 'AI & Chatbots',
                  desc: 'AI-powered solutions including chatbots, integrations, and intelligent automation.',
                },
                {
                  icon: <Palette size={24} />,
                  title: 'UX/UI Design',
                  desc: 'Beautiful, intuitive interfaces designed for clarity, usability, and conversion.',
                },
                {
                  icon: <Network size={24} />,
                  title: 'System Architecture & Scalability',
                  desc: 'Designing scalable, reliable system architectures that grow with your product and users.',
                },
                {
                  icon: <Users size={24} />,
                  title: 'Dedicated Teams',
                  desc: 'Full engineering pods scaled to your project needs, acting as an extension of your team.',
                },
              ].map((service, i) => (
                <div key={i} className={cn(theme.components.card.secondary, 'p-6')}>
                  <div className={cn(theme.components.icon.container, 'w-12 h-12 mb-4')}>
                    <div className={theme.components.icon.color}>{service.icon}</div>
                  </div>
                  <h3 className={cn('text-xl font-bold mb-2', theme.colors.text.primary)}>
                    {service.title}
                  </h3>
                  <p className={theme.colors.text.secondary}>{service.desc}</p>
                </div>
              ))}

          </div>

          <div className={cn(theme.components.card.primary, 'mt-12 p-8')}>
            <h3 className={cn(theme.typography.h3, 'mb-6')}>What You Get</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Access to elite global development talent',
                'No hiring costs, no turnover risk',
                'Faster time-to-market',
                'Scalable development resources',
                'End-to-end project management',
                'Transparent communication and deliverables'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')} size={20} />
                  <span className={theme.colors.text.tertiary}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BuildMore Subscriptions */}
      <section className={theme.spacing.container}>
        <div className="py-16">
          <div className="mb-12">
            <h2 className={cn(theme.typography.h2, 'mb-4')}>BuildMore: Monthly Dev Subscriptions</h2>
            <p className={theme.typography.body}>
              Predictable pricing, consistent support, and zero hiring headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Junior Tier */}
            <div className={cn(theme.components.card.primary, 'p-8 flex flex-col h-full')}>
              <div className="mb-6">
                <h3 className={cn(theme.typography.h3, 'mb-2')}>Junior Dev Tier</h3>
                {/*<div className="flex items-baseline gap-2 mb-4">
                  <span className={cn('text-4xl font-bold', theme.colors.text.primary)}>$1,700</span>
                  <span className={theme.colors.text.muted}>/month</span>
                </div>
                <p className={cn('text-sm', theme.colors.text.muted)}>or $16,000/year</p>*/}
              </div>
              <ul className="space-y-3 mb-8">
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>3-5 features shipped per year</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>Basic priority scheduling</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>Light maintenance support</span>
                </li>
              </ul>
              <p className={cn('text-sm italic mb-6', theme.colors.text.muted)}>
                Ideal for small businesses and marketing websites needing occasional updates.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href="/contact"
                  className={cn(
                    theme.buttons.primary,
                    'w-full flex items-center justify-center py-4 rounded-xl text-lg font-semibold'
                  )}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mid Dev Tier */}
            <div className={cn(theme.components.card.primary, 'p-8 flex flex-col h-full border-2', theme.colors.border.secondary, 'relative')}>
              <div className={cn('absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold', theme.colors.bg.tertiary, theme.colors.text.primary)}>
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className={cn(theme.typography.h3, 'mb-2')}>Developer Tier</h3>
                {/*<div className="flex items-baseline gap-2 mb-4">
                  <span className={cn('text-4xl font-bold', theme.colors.text.primary)}>$4,200</span>
                  <span className={theme.colors.text.secondary}>/month</span>
                </div>
                <p className={cn('text-sm', theme.colors.text.secondary)}>or $45,000/year</p>*/}
              </div>
              <ul className="space-y-3 mb-8">
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')} size={18} />
                  <span>Full-year ongoing maintenance</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')} size={18} />
                  <span>Major feature updates</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')} size={18} />
                  <span>Higher priority than Intern tier</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')} size={18} />
                  <span>Performance monitoring</span>
                </li>
              </ul>
              <p className={cn('text-sm italic mb-6', theme.colors.text.secondary)}>
                Best for active SaaS products and growing businesses needing consistent support.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href="/contact"
                  className={cn(
                    theme.buttons.primary,
                    'w-full flex items-center justify-center py-4 rounded-xl text-lg font-semibold'
                  )}
                >
                  Get Started
                </a>
              </div>

            </div>

            {/* Senior Dev Tier */}
            <div className={cn(theme.components.card.primary, 'p-8 flex flex-col h-full')}>
              <div className="mb-6">
                <h3 className={cn(theme.typography.h3, 'mb-2')}>Senior Dev Tier</h3>
                {/*<div className="flex items-baseline gap-2 mb-4">
                  <span className={cn('text-4xl font-bold', theme.colors.text.primary)}>$12,500</span>
                  <span className={theme.colors.text.muted}>/month</span>
                </div>
                <p className={cn('text-sm', theme.colors.text.muted)}>or $125,000/year</p> */}
              </div>
              <ul className="space-y-3 mb-8">
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>Dedicated developer assigned</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>High-priority feature shipments</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>Urgent support included</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>End-to-end coverage</span>
                </li>
                <li className={cn('flex items-start gap-3', theme.colors.text.tertiary)}>
                  <CheckCircle className="text-gray-600 flex-shrink-0 mt-1" size={18} />
                  <span>Architecture guidance</span>
                </li>
              </ul>
              <p className={cn('text-sm italic mb-6', theme.colors.text.muted)}>
                Ideal for large platforms and mission-critical products with long-term scaling needs.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href="/contact"
                  className={cn(
                    theme.buttons.primary,
                    'w-full flex items-center justify-center py-4 rounded-xl text-lg font-semibold'
                  )}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <div className={cn(theme.components.card.primary, 'p-12 text-center')}>
            <h2 className={cn(theme.typography.h2, 'mb-6')}>Ready to Get Started?</h2>
            <p className={cn(theme.typography.body, 'mb-8 max-w-2xl mx-auto')}>
              Let's discuss which service fits your needs best and how we can help accelerate your development.
            </p>
            <a href="/contact" className={cn(theme.buttons.primary, 'inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition')}>
              Contact Us Today <ArrowRight size={20} />
            </a>
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