// pages/about.js
import React from 'react';
import { Target, Eye, Users, Zap, TrendingUp } from 'lucide-react';
import { theme, cn } from '../styles/theme.js';
import Link from 'next/link';

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== SAME BACKGROUND AS HOME ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/25 blur-[140px]" />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/25 blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[25%] w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[160px]" />
      </div>
      
      {/* Navigation */}
      <nav className={theme.components.nav.container}>
        <div className={theme.spacing.container}>
          <div className="py-4 flex justify-between items-center">
            <Link href="/" className={cn('text-2xl font-bold cursor-pointer', theme.colors.text.primary)}>
              BuildNext
            </Link>
            <div className="flex gap-8">
              <a href="/" className={theme.components.nav.link}>Home</a>
              <a href="/services" className={theme.components.nav.link}>Services</a>
              <a href="/about" className={theme.components.nav.linkActive}>About</a>
              <a href="/contact" className={theme.components.nav.link}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={theme.spacing.container}>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className={cn(theme.typography.h1, 'mb-6')}>
              About <span className={theme.colors.text.secondary}>BuildNext</span>
            </h1>
            <p className={cn(theme.typography.body, 'leading-relaxed')}>
              We're a team of committed, high-performing software developers transforming how businesses build digital products.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                <Target className={theme.components.icon.color} size={28} />
              </div>
              <h2 className={cn('text-3xl font-bold mb-4', theme.colors.text.primary)}>Our Mission</h2>
              <p className={cn(theme.colors.text.tertiary, 'leading-relaxed text-lg')}>
                To empower innovators, entrepreneurs, and growing businesses with high-quality, scalable, and affordable engineering solutions — transforming ideas into market-ready products with ongoing development support.
              </p>
            </div>

            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                <Eye className={theme.components.icon.color} size={28} />
              </div>
              <h2 className={cn('text-3xl font-bold mb-4', theme.colors.text.primary)}>Our Vision</h2>
              <p className={cn(theme.colors.text.tertiary, 'leading-relaxed text-lg')}>
                To become the global standard for outsourced development teams by combining world-class engineering quality, transparent pricing, and long-term partnership value.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className={cn(theme.components.card.primary, 'p-12 mb-20')}>
            <h2 className={cn(theme.typography.h2, 'mb-8')}>Who We Are</h2>
            <div className={cn('space-y-6 text-lg leading-relaxed', theme.colors.text.tertiary)}>
              <p>
                BuildNext is a team of committed, high-performing software engineers who specialize in mobile and web app development, internal tooling, AI-driven features, CRM integrations, and scalable technical systems.
              </p>
              <p>
                We've already delivered projects in healthcare, AI, SaaS, and B2B tooling — always with a focus on quality, timelines, and reliability. We believe in clean execution, long-term relationships, and embedding best practices into every delivery.
              </p>
              <p>
                Whether you're building from scratch or expanding an existing product, our team is structured to scale with your ambition. We're not just developers — we're your technical partners in growth.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-20">
            <h2 className={cn(theme.typography.h2, 'mb-12 text-center')}>What Sets Us Apart</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={cn(theme.components.card.secondary, 'w-16 h-16 mx-auto mb-6')}>
                  <Users className={theme.components.icon.color} size={32} />
                </div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Elite Talent</h3>
                <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                  Access to world-class developers, designers, and PMs without the overhead of full-time hiring.
                </p>
              </div>

              <div className="text-center">
                <div className={cn(theme.components.card.secondary, 'w-16 h-16 mx-auto mb-6')}>
                  <Zap className={theme.components.icon.color} size={32} />
                </div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Fast Execution</h3>
                <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                  Agile sprint cycles and transparent communication keep projects moving at startup speed.
                </p>
              </div>

              <div className="text-center">
                <div className={cn(theme.components.card.secondary, 'w-16 h-16 mx-auto mb-6')}>
                  <TrendingUp className={theme.components.icon.color} size={32} />
                </div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Scalable Support</h3>
                <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                  From one-time projects to ongoing subscriptions, we scale with your business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className={cn(theme.components.card.primary, 'p-12')}>
            <h2 className={cn(theme.typography.h2, 'mb-8 text-center')}>Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Quality First</h3>
                <p className={cn(theme.colors.text.tertiary, 'leading-relaxed')}>
                  We embed best practices into every line of code, ensuring your product is built to last and scale.
                </p>
              </div>
              <div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Long-Term Partnership</h3>
                <p className={cn(theme.colors.text.tertiary, 'leading-relaxed')}>
                  We're not just vendors — we're invested in your success and build relationships that last.
                </p>
              </div>
              <div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Transparent Communication</h3>
                <p className={cn(theme.colors.text.tertiary, 'leading-relaxed')}>
                  Weekly sprints, clear roadmaps, and honest timelines keep everyone aligned.
                </p>
              </div>
              <div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>Modern Tech Stack</h3>
                <p className={cn(theme.colors.text.tertiary, 'leading-relaxed')}>
                  We use cutting-edge tools and frameworks to build products that are fast, secure, and maintainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <div className={cn(theme.components.card.primary, 'p-12 text-center')}>
            <h2 className={cn(theme.typography.h2, 'mb-6')}>Let's Build Together</h2>
            <p className={cn(theme.typography.body, 'mb-8 max-w-2xl mx-auto')}>
              Ready to work with a team that's as committed to your success as you are? Let's talk about your project.
            </p>
            <a href="/contact" className={cn(theme.buttons.primary, 'inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition')}>
              Get in Touch
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