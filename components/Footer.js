export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            BuildNext
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Elite software delivery for startups and scaling teams.
            Build faster without the overhead.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-3">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-3">
            Get Started
          </h4>
          <p className="text-sm text-slate-400 mb-4">
            Ready to build? Let’s talk about your project.
          </p>
          <a
            href="/contact"
            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800/60 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BuildNext. All rights reserved.
      </div>
    </footer>
  );
}
