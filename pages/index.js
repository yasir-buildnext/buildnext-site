import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Users, CheckCircle } from 'lucide-react';
import { theme, cn } from '../styles/theme';
import { fadeUp, fadeInLeft } from '../lib/motion';
import ImageCompareSlider from '../components/ImageCompareSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ===== LIGHTER BASE BACKGROUND ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />

      {/* ===== SOFT COLOR BLOBS (STATIC) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/25 blur-[140px]" />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/25 blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[25%] w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[160px]" />
      </div>

      {/* NAV */}
      <Navbar />

      <main className="flex-grow">

        {/* HERO */}
        <section className={theme.spacing.container}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="py-24 md:py-32 text-center max-w-4xl mx-auto"
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

        {/* FEATURES */}
        <section className={theme.spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="py-20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Code, title: 'End-to-End Development', desc: 'From MVPs to AI integrations and internal tools.' },
                { icon: Zap, title: 'BuildMore Subscriptions', desc: 'Predictable pricing, consistent delivery.' },
                { icon: Users, title: 'Elite Global Talent', desc: 'World-class engineers, on demand.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInLeft}
                  className={cn(theme.components.card.primary, 'p-8')}
                >
                  <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                    <item.icon className={theme.components.icon.color} size={28} />
                  </div>
                  <h3 className={cn(theme.typography.h3, 'mb-3')}>
                    {item.title}
                  </h3>
                  <p className={cn(theme.colors.text.secondary)}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WHY BUILDNEXT */}
        <section className={theme.spacing.container}>
          <div className="py-24">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className={cn(theme.typography.h2, 'text-center mb-20')}
            >
              Why BuildNext?
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16"
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
                  <CheckCircle size={22} className="mt-1 opacity-70" />
                  <span className="text-lg text-slate-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>


            <motion.h2
              variants={fadeUp}
              className={cn(theme.typography.h2, 'text-center mb-16')}
            >
              See what we can do for you...


            <div className="mt-12">
              <ImageCompareSlider
                oldImage="/images/new_image_0.png"
                newImage="/images/old_image_3.png"
              />
            </div>
            </motion.h2>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={theme.spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="py-24"
          >
            <motion.h2
              variants={fadeUp}
              className={cn(theme.typography.h2, 'text-center mb-16')}
            >
              What Our Clients Say
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {[0, 1].map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={cn(theme.components.card.primary, 'p-10')}
                >
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>

                  <p className="text-lg text-slate-200 leading-relaxed mb-8">
                    {i === 0
                      ? '“We completely built our website and an AI model from the ground up and end-to-end with BuildNext. They felt like an extension of our own team.”'
                      : '“BuildNext redesigned our entire website. They were very professional and their speed, quality, and communication were unmatched.”'}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${i === 0 ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-pink-400 to-purple-500'}`} />
                    <div>
                      <div className="font-semibold text-white">
                        {i === 0 ? 'Kevin Moore' : 'Executive at Minlopro Partners'}
                      </div>
                      <div className="text-sm text-slate-400">
                        {i === 0 ? 'Founder @ Founderport' : 'Salesforce Consulting Company'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className={theme.spacing.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="py-24"
          >
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
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
