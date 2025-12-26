import React from 'react';
import { Target, Eye, Users, Zap, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">BuildNext</div>
          <div className="flex gap-8">
            <a href="/" className="text-white/80 hover:text-blue-400 transition">Home</a>
            <a href="/services" className="text-white/80 hover:text-blue-400 transition">Services</a>
            <a href="/about" className="text-white hover:text-blue-400 transition">About</a>
            <a href="/contact" className="text-white/80 hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">BuildNext</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're a team of committed, high-performing software engineers transforming how businesses build digital products.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="bg-blue-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-blue-400" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              To empower innovators, entrepreneurs, and growing businesses with high-quality, scalable, and affordable engineering solutions — transforming ideas into market-ready products with ongoing development support.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="bg-cyan-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-cyan-400" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              To become the global standard for outsourced development teams by combining world-class engineering quality, transparent pricing, and long-term partnership value.
            </p>
          </div>
        </div>

        {/* Who We Are */}
        <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Who We Are</h2>
          <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Elite Talent</h3>
              <p className="text-gray-300 leading-relaxed">
                Access to world-class developers, designers, and PMs without the overhead of full-time hiring.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Execution</h3>
              <p className="text-gray-300 leading-relaxed">
                Agile sprint cycles and transparent communication keep projects moving at startup speed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Support</h3>
              <p className="text-gray-300 leading-relaxed">
                From one-time projects to ongoing subscriptions, we scale with your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality First</h3>
              <p className="text-gray-200 leading-relaxed">
                We embed best practices into every line of code, ensuring your product is built to last and scale.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Long-Term Partnership</h3>
              <p className="text-gray-200 leading-relaxed">
                We're not just vendors — we're invested in your success and build relationships that last.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Communication</h3>
              <p className="text-gray-200 leading-relaxed">
                Weekly sprints, clear roadmaps, and honest timelines keep everyone aligned.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Modern Tech Stack</h3>
              <p className="text-gray-200 leading-relaxed">
                We use cutting-edge tools and frameworks to build products that are fast, secure, and maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Together</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to work with a team that's as committed to your success as you are? Let's talk about your project.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">BuildNext</h3>
              <p className="text-gray-400 text-sm">Elite software delivery for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-white transition">BuildNext</a></li>
                <li><a href="/services" className="hover:text-white transition">BuildMore</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">yasir@buildnext.org</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 BuildNext. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
