import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Users, CheckCircle } from 'lucide-react';
import { theme, cn } from '../styles/theme';
import { fadeUp, fadeInLeft } from '../lib/motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Parallax layers (visible but tasteful)
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const xDrift = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">

      {/* =====================
          PARALLAX BACKGROUND
         ===================== */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* Indigo (slow) */}
        <motion.div
          style={{ y: ySlow, x: xDrift }}
          className="absolute top-[-30%] left-[-20%] w-[900px] h-[900px] rounded-full bg-indigo-500/25 blur-[180px]"
        />

        {/* Cyan (fast) */}
        <motion.div
          style={{ y: yFast, x: xDrift }}
          className="absolute top-[5%] right-[-20%] w-[800px] h-[800px] rounded-full bg-cyan-400/30 blur-[180px]"
        />

        {/* Violet (medium) */}
        <motion.div
          style={{ y: yMedium }}
          className="absolute bottom-[-35%] left-[10%] w-[1000px] h-[1000px] rounded-full bg-violet-500/22 blur-[220px]"
        />
      </div>

      {/* =====================
          READABILITY WASH
         ===================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 -z-10" />

      {/* =====================
          NAVIGATION
         ===================== */}
      <nav className={theme.components.nav.container}>
        <div className={theme.spacing.container}>
          <div className="py-4 flex justify-between items-center">
            <div className={cn('text-2xl font-bold', theme.colors.text.primary)}>
              BuildNext
            </div>
            <div className="flex gap-8">
              <a href="/" className={theme.components.nav.linkActive}>Home</a>
              <a href="/services" className={theme.components.nav.link}>Services</a>
              <a href="/about" className={theme.components.nav.link}>About</a>
              <a href="/contact" className={theme.components.nav.link}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* =====================
          HERO
         ===================== */}
      <section className={theme.spacing.container}>
        <div className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={cn(theme.typography.h1, 'mb-6 leading-tight')}
          >
            Elite Software Delivery,
            <span className={theme.colors.text.secondary}> Minus the Overhead</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={cn(theme.typography.bodyLarge, 'mb-12 leading-relaxed')}
          >
            We help founders, startups, and scaling companies bring ideas to life
            with high-performing engineering talent.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
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
              className={cn(
                theme.buttons.secondary,
                'px-8 py-4 rounded-lg text-lg font-semibold'
              )}
            >
              View Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================
          FEATURES
         ===================== */}
      <section className={theme.spacing.container}>
        <div className="py-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: 'End-to-End Development',
              desc: 'From MVPs and SaaS platforms to AI integrations and internal tools, we provide full-stack development that scales with your vision.',
            },
            {
              icon: Zap,
              title: 'BuildMore Subscriptions',
              desc: 'Monthly engineering resources tailored to your product’s needs. Predictable pricing, consistent support, zero hiring headaches.',
            },
            {
              icon: Users,
              title: 'Elite Global Talent',
              desc: 'Access world-class developers, designers, and PMs without the overhead. We’re your technical team, on-demand.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={cn(theme.components.card.primary, 'p-8')}
            >
              <div className={cn(theme.components.icon.container, 'w-14 h-14 mb-6')}>
                <item.icon className={theme.components.icon.color} size={28} />
              </div>
              <h3 className={cn(theme.typography.h3, 'mb-4')}>
                {item.title}
              </h3>
              <p className={cn(theme.colors.text.secondary, 'leading-relaxed')}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================
          WHY BUILDNEXT
         ===================== */}
      <section className={theme.spacing.container}>
        <div className="py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={cn(theme.typography.h2, 'mb-12 text-center')}
          >
            Why BuildNext?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="flex items-start gap-4"
              >
                <CheckCircle
                  className={cn(theme.colors.text.muted, 'flex-shrink-0 mt-1')}
                  size={24}
                />
                <span className={cn('text-lg', theme.colors.text.tertiary)}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
