import React from 'react';
import ImageCompareSlider from '../components/ImageCompareSlider';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Users, CheckCircle } from 'lucide-react';
import { theme, cn } from '../styles/theme';
import { fadeUp, fadeInLeft } from '../lib/motion';

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function Home() {
  return (
    <div className={cn('relative min-h-screen overflow-hidden', theme.colors.bg.primary)}>
      {/* Background blobs (NO parallax) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Indigo glow */}
        <div className="absolute top-[-25%] left-[-15%] w-[700px] h-[700px] rounded-full bg-indigo-500/30 blur-[140px]" />
        {/* Cyan glow */}
        <div className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-400/30 blur-[140px]" />
        {/* Violet glow */}
        <div className="absolute bottom-[-25%] left-[25%] w-[800px] h-[800px] rounded-full bg-violet-500/25 blur-[160px]" />
      </div>

      {/* Subtle bottom fade (not muting the whole page) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/55 -z-10" />

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

      {/* Hero */}
      <section className={theme.spacing.container}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="py-20 md:py-32 text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className={cn(theme.typography.h1, 'mb-6 leading-tight')}
          >
            Elite Software Delivery,
            <span className={theme.colors.text.secondary}> Minus the Overhead</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={cn(theme.typography.bodyLarge, 'mb-12 leading-relaxed')}
          >
            We help founders, startups, and scaling companies bring ideas to life
            with high-performing engineering talent.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className={cn(
                theme.buttons.primary,
                'px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-3 whitespace-nowrap'
              )}
            >
              <span>Get Started</span>
              <ArrowRight size={18} className="opacity-80" />
            </a>

            <a
              href="/services"
              className={cn(theme.buttons.secondary, 'px-8 py-4 rounded-lg')}
            >
              View Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Features (fly in on scroll) */}
      <section className={theme.spacing.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="py-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'End-to-End Development',
                desc:
                  'From MVPs and SaaS platforms to AI integrations and internal tools, we provide full-stack development that scales with your vision.',
              },
              {
                icon: Zap,
                title: 'BuildMore Subscriptions',
                desc:
                  "Monthly engineering resources tailored to your product’s needs. Predictable pricing, consistent support, zero hiring headaches.",
              },
              {
                icon: Users,
                title: 'Elite Global Talent',
                desc:
                  "Access world-class developers, designers, and PMs without the overhead. We’re your technical team, on-demand.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInLeft}
                className={cn(theme.components.card.primary, 'p-8')}
              >
                <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                  <item.icon className={theme.components.icon.color} size={28} />
                </div>
                <h3 className={cn(theme.typography.h3, 'mb-4')}>{item.title}</h3>
                <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why BuildNext (more space after heading + fly in on scroll) */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className={cn(theme.typography.h2, 'text-center mb-16')}
          >
            Why BuildNext?
          </motion.h2>

          {/* extra space after heading */}
          <div className="h-4" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              'Access to elite global engineering talent',
              'No hiring headaches or turnover risk',
              'Faster time-to-market',
              'Transparent deliverables and timelines',
              'Weekly sprint-based communication',
              'Scale resources up or down as needed',
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <CheckCircle
                  className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')}
                  size={24}
                />
                <span className={cn('text-lg', theme.colors.text.tertiary)}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={theme.spacing.container}>
        {/* Sliding image comparison */}
        <div className="mt-16">
          <ImageCompareSlider
            oldImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            newImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          />
        </div>
      </section>


      
      {/* TESTIMONIALS */}
<section className={theme.spacing.container}>
  <div className="py-24">
    <h2 className={cn(theme.typography.h2, 'text-center mb-16')}>
      What Our Clients Say
    </h2>

    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {/* Testimonial 1 */}
      <div className={cn(theme.components.card.primary, 'p-10')}>
        <div className="flex gap-1 mb-6 text-yellow-400">
          {'★★★★★'.split('').map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>

        <p className="text-lg text-slate-200 leading-relaxed mb-8">
          “BuildNext delivered our entire AI product end-to-end.
          Their speed, quality, and communication were unmatched.”
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
          <div>
            <div className="font-semibold text-white">Kevin Moore</div>
            <div className="text-sm text-slate-400">
              Founder @ Angel Beta
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className={cn(theme.components.card.primary, 'p-10')}>
        <div className="flex gap-1 mb-6 text-yellow-400">
          {'★★★★★'.split('').map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>

        <p className="text-lg text-slate-200 leading-relaxed mb-8">
          “We completely overhauled our website and internal tools with BuildNext.
          They feel like an extension of our own team.”
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
          <div>
            <div className="font-semibold text-white">
              Minlopro Executive Team
            </div>
            <div className="text-sm text-slate-400">
              Technology Company
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className={theme.spacing.container}>
  <div className="py-24">
    <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to Build Something Amazing?
      </h2>

      <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
        Let’s discuss your project and how BuildNext can accelerate your
        development timeline.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center gap-3 bg-white text-blue-600
                   px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90"
      >
        Contact Us Today →
      </a>
    </div>
  </div>
</section>

      <Footer />

    </div>
  );
}
