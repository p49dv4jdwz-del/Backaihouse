import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Nav */}
      <nav style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2a2a2a' }}>
        <div style={{ fontFamily: 'serif', fontSize: '20px', fontWeight: '700', color: '#c9a84c' }}>
          BackAIHouse
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link href="/login" style={{ color: '#999', fontSize: '14px', textDecoration: 'none' }}>
            Login
          </Link>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#000', padding: '8px 20px', borderRadius: '6px', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '100px 32px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '20px', padding: '6px 16px', fontSize: '12px', color: '#c9a84c', marginBottom: '32px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Built for Professional Kitchens
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px' }}>
          The AI operating system<br />
          <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>for your kitchen.</em>
        </h1>
        <p style={{ fontSize: '18px', color: '#999', lineHeight: '1.7', marginBottom: '48px', maxWidth: '560px', margin: '0 auto 48px' }}>
          BackAIHouse becomes the second brain of your kitchen. AI allergen checking, recipe management, supplier tracking and kitchen intelligence — all in one place.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#000', padding: '14px 32px', borderRadius: '8px', fontSize: '16px', textDecoration: 'none', fontWeight: '700' }}>
            Start Free Trial
          </Link>
          <Link href="#features" style={{ border: '1px solid #2a2a2a', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontSize: '16px', textDecoration: 'none' }}>
            See Features
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 32px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Do</div>
          <h2 style={{ fontSize: '36px', fontWeight: '700' }}>Everything your kitchen needs</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { icon: '🛡️', title: 'AI Allergen Checker', desc: 'Detect all 14 UK allergens instantly. Paste a menu, upload a PDF or recipe and get a full allergen breakdown with confidence levels.' },
            { icon: '📖', title: 'Recipe Builder', desc: 'Store every recipe with ingredients, costs, GP%, allergens and method. Your full recipe library in one place.' },
            { icon: '🧠', title: 'Kitchen Memory', desc: 'Ask your kitchen anything in plain English. "What allergens are in our peppercorn sauce?" — answered instantly.' },
            { icon: '🚚', title: 'Supplier Database', desc: 'Track every supplier product with allergens, pricing and product codes. Link directly to your recipes.' },
            { icon: '📊', title: 'Menu Analysis', desc: 'Upload your menu and get a full AI analysis — allergen risk, profitability, balance and waste opportunities.' },
            { icon: '👥', title: 'Staff Assistant', desc: 'Give your team an AI trained only on your restaurant\'s own data. Safe, accurate, always on.' },
          ].map((feature, i) => (
            <div key={i} style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: '#999', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', textAlign: 'center', borderTop: '1px solid #2a2a2a' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Ready to transform your kitchen?</h2>
        <p style={{ color: '#999', marginBottom: '32px', fontSize: '16px' }}>Join restaurants already using BackAIHouse.</p>
        <Link href="/signup" style={{ background: '#c9a84c', color: '#000', padding: '16px 40px', borderRadius: '8px', fontSize: '16px', textDecoration: 'none', fontWeight: '700' }}>
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px', borderTop: '1px solid #2a2a2a', textAlign: 'center', color: '#666', fontSize: '13px' }}>
        © 2025 BackAIHouse. Built for professional kitchens.
      </footer>

    </main>
  )
}
