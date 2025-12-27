// pages/index.js
import React from 'react';
import { ArrowRight, Code, Zap, Users, CheckCircle } from 'lucide-react';
import { theme, cn } from '../styles/theme.js';

export default function Home() {
  return (
    <div className={cn('min-h-screen', theme.colors.bg.primary)}>
      {/* Navigation */}
      <nav className={theme.components.nav.container}>
        <div className={theme.spacing.container}>
          <div className="py-4 flex justify-between items-center">
            <div className={cn('text-2xl font-bold', theme.colors.text.primary)}>BuildNext</div>
            <div className="flex gap-8">
              <a href="/" className={theme.components.nav.linkActive}>Home</a>
              <a href="/services" className={theme.components.nav.link}>Services</a>
              <a href="/about" className={theme.components.nav.link}>About</a>
              <a href="/contact" className={theme.components.nav.link}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={theme.spacing.container}>
        <div className="py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={cn(theme.typography.h1, 'mb-6 leading-tight')}>
              Elite Software Delivery,
              <span className={theme.colors.text.secondary}> Minus the Overhead</span>
            </h1>
            <p className={cn(theme.typography.bodyLarge, 'mb-12 leading-relaxed')}>
              We help founders, startups, and scaling companies bring ideas to life with high-performing engineering talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className={cn(theme.buttons.primary, 'px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2')}>
                Get Started <ArrowRight size={20} />
              </a>
              <a href="/services" className={cn(theme.buttons.secondary, 'px-8 py-4 rounded-lg text-lg font-semibold transition')}>
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={theme.spacing.container}>
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                <Code className={theme.components.icon.color} size={28} />
              </div>
              <h3 className={cn(theme.typography.h3, 'mb-4')}>End-to-End Development</h3>
              <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                From MVPs and SaaS platforms to AI integrations and internal tools, we provide full-stack development that scales with your vision.
              </p>
            </div>

            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                <Zap className={theme.components.icon.color} size={28} />
              </div>
              <h3 className={cn(theme.typography.h3, 'mb-4')}>BuildMore Subscriptions</h3>
              <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                Monthly engineering resources tailored to your product's needs. Predictable pricing, consistent support, zero hiring headaches.
              </p>
            </div>

            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                <Users className={theme.components.icon.color} size={28} />
              </div>
              <h3 className={cn(theme.typography.h3, 'mb-4')}>Elite Global Talent</h3>
              <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                Access world-class developers, designers, and PMs without the overhead. We're your technical team, on-demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BuildNext */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <div className={cn(theme.components.card.primary, 'p-12')}>
            <h2 className={cn(theme.typography.h2, 'mb-12 text-center')}>Why BuildNext?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Access to elite global engineering talent',
                'No hiring headaches or turnover risk',
                'Faster time-to-market',
                'Transparent deliverables and timelines',
                'Weekly sprint-based communication',
                'Scale resources up or down as needed'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')} size={24} />
                  <span className={cn('text-lg', theme.colors.text.tertiary)}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <h2 className={cn(theme.typography.h2, 'mb-12 text-center')}>What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.colors.text.muted, 'text-2xl mb-4')}>★★★★★</div>
              <p className={cn(theme.colors.text.tertiary, 'text-lg mb-6 leading-relaxed')}>
                "BuildNext delivered our entire AI product end-to-end. Their speed, quality, and communication were unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className={cn('w-12 h-12 rounded-full', theme.colors.bg.tertiary)}></div>
                <div>
                  <p className={cn(theme.colors.text.primary, 'font-semibold')}>Kevin Moore</p>
                  <p className={cn(theme.colors.text.muted, 'text-sm')}>Founder @ Angel Beta</p>
                </div>
              </div>
            </div>

            <div className={cn(theme.components.card.primary, 'p-8')}>
              <div className={cn(theme.colors.text.muted, 'text-2xl mb-4')}>★★★★★</div>
              <p className={cn(theme.colors.text.tertiary, 'text-lg mb-6 leading-relaxed')}>
                "We completely overhauled our website and internal tools with BuildNext. They feel like an extension of our own team."
              </p>
              <div className="flex items-center gap-4">
                <div className={cn('w-12 h-12 rounded-full', theme.colors.bg.tertiary)}></div>
                <div>
                  <p className={cn(theme.colors.text.primary, 'font-semibold')}>Minlopro Executive Team</p>
                  <p className={cn(theme.colors.text.muted, 'text-sm')}>Technology Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <div className={cn(theme.components.card.primary, 'p-12 text-center')}>
            <h2 className={cn(theme.typography.h2, 'mb-6')}>Ready to Build Something Amazing?</h2>
            <p className={cn(theme.typography.body, 'mb-8 max-w-2xl mx-auto')}>
              Let's discuss your project and how BuildNext can accelerate your development timeline.
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