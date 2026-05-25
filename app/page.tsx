export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For developers &amp; students
        </div>
        <h1 className="text-5xl font-bold text-white leading-tight mb-6">
          Practice typing with{' '}
          <span className="text-[#58a6ff]">classic literature</span>{' '}
          &amp; coding challenges
        </h1>
        <p className="text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Level up your typing speed and accuracy using real programming books, documentation, and code repositories — with syntax highlighting built in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Start Practicing — $5/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e] mt-1">Content Libraries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">10k+</div>
            <div className="text-sm text-[#8b949e] mt-1">Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">15+</div>
            <div className="text-sm text-[#8b949e] mt-1">Languages</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
          <div className="text-lg font-semibold text-white mb-1">Pro Access</div>
          <div className="text-5xl font-bold text-white mt-4 mb-2">
            $5<span className="text-xl text-[#8b949e] font-normal">/mo</span>
          </div>
          <p className="text-[#8b949e] mb-8">Everything you need to type faster and smarter</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Classic literature library (100+ books)',
              'Programming docs & technical writing',
              'Real code repos with syntax highlighting',
              'WPM & accuracy tracking dashboard',
              'Progressive difficulty levels',
              'Cancel anytime'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What content is available to practice with?</h3>
            <p className="text-[#8b949e] text-sm">You get access to classic literature (Dickens, Austen, Twain), programming books (Clean Code, SICP), official documentation (MDN, Python docs), and real open-source code repositories across 15+ programming languages.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is this different from other typing tools?</h3>
            <p className="text-[#8b949e] text-sm">Most typing tools use random words or generic sentences. We use real developer content — actual code, documentation, and technical writing — so you build muscle memory for the characters and patterns you type every day at work.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes, absolutely. Cancel anytime from your account dashboard with no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Typing Practice Library. All rights reserved.
      </footer>
    </main>
  )
}
