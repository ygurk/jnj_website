/* J&J Studios website — Home page */
function Home({ onNavigate }) {
  const { Button, Card, Badge, Testimonial, Accordion } = window.DesignSystemJJ_a7a2a8;
  const { JJSection: Section, JJSectionHeading: SectionHeading, JJPhotoSlot: PhotoSlot, JJBrowserFrame: BrowserFrame, JJStars: Stars } = window;
  const Icon = window.JJIcon;

  const services = [
    { icon: 'penTool', title: 'A brand-new website', body: 'No site yet, or starting fresh. We design and build the whole thing — words, look, and all — so you launch with something you’re proud of.' },
    { icon: 'layout', title: 'A redesign or refresh', body: 'Got a site that feels dated or just isn’t pulling its weight? We rework it into something modern, fast, and built to turn visitors into customers.' },
    { icon: 'heart', title: 'Ongoing care', body: 'We don’t vanish after launch. Updates, small changes, and a real person to email when you need one — for a simple monthly rate.' },
  ];

  const steps = [
    { n: '01', title: 'A friendly chat', body: 'We start with a relaxed call to understand your business and what you need. No tech-speak, no pressure.' },
    { n: '02', title: 'We design & build', body: 'You see real designs early and often. We handle the technical parts and keep you in the loop the whole way.' },
    { n: '03', title: 'Launch & look after', body: 'We get you live, walk you through it, and stick around for the updates and questions that come later.' },
  ];

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) var(--gutter-lg)', display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center' }} className="jj-hero-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '6px 14px 6px 8px', marginBottom: '26px', boxShadow: 'var(--shadow-xs)' }}>
              <Stars n={5} size={15} />
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--text-muted)' }}>Trusted by 40+ local businesses</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0 }}>
              A website that quietly <em style={{ fontStyle: 'italic', color: 'var(--green-700)' }}>earns its keep.</em>
            </h1>
            <p style={{ marginTop: '22px', fontSize: 'clamp(18px, 2vw, 21px)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '46ch' }}>
              We’re Jakob &amp; Jakob — two people who build fast, friendly websites for small businesses. The kind that turn a curious visitor into a phone call. No jargon, no surprises.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNavigate('contact')}>Book a free chat</Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('work')}>See our work</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '28px', fontSize: '14.5px', color: 'var(--text-faint)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><Icon name="check" size={17} style={{ color: 'var(--green-600)' }} /> Free, no-pressure quote</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><Icon name="check" size={17} style={{ color: 'var(--green-600)' }} /> Replies within a day</span>
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ position: 'relative' }}>
            <BrowserFrame url="bloomandbranch.com">
              <div style={{ background: 'var(--surface-card)' }}>
                <div style={{ padding: '20px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '17px', color: 'var(--green-800)' }}>Bloom &amp; Branch</span>
                  <span style={{ display: 'flex', gap: '12px', fontSize: '11px', color: 'var(--text-faint)' }}><span>Shop</span><span>About</span><span style={{ color: 'var(--gold-700)', fontWeight: 600 }}>Visit us</span></span>
                </div>
                <div style={{ padding: '14px 22px 22px' }}>
                  <PhotoSlot label="Florist storefront" icon="sparkles" ratio="16 / 9" tone="green" />
                  <div style={{ marginTop: '14px', fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.2 }}>Fresh flowers, arranged with love.</div>
                  <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                    <span style={{ background: 'var(--gold-500)', color: 'var(--green-900)', fontSize: '11px', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-pill)' }}>Order online</span>
                    <span style={{ border: '1px solid var(--border-strong)', color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600, padding: '6px 12px', borderRadius: 'var(--radius-pill)' }}>Our story</span>
                  </div>
                </div>
              </div>
            </BrowserFrame>
            {/* floating stat card */}
            <div className="jj-float-card" style={{ position: 'absolute', bottom: '-26px', left: '-26px', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-default)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--green-50)', color: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="trendingUp" size={24} /></span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1 }}>2× more calls</span>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-faint)', marginTop: '3px' }}>in the first month live</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- TRUSTED BY ---------- */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--paper-2)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '26px var(--gutter-lg)', display: 'flex', alignItems: 'center', gap: 'clamp(20px, 4vw, 56px)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-faint)', letterSpacing: '0.02em' }}>Trusted by local businesses like</span>
          {['Alvarez Dental', 'Becker Roofing', 'Bloom & Branch', 'Pine Street Cafe', 'Hardy Plumbing'].map((n) => (
            <span key={n} style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--ink-400)' }}>{n}</span>
          ))}
        </div>
      </div>

      {/* ---------- SERVICES ---------- */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Three simple ways we help" lead="Whatever stage you’re at, there’s a clear place to start — and a real person on the other end of it." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {services.map((s) => (
            <Card key={s.title} padding="lg">
              <span style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', background: 'var(--green-50)', color: 'var(--green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}><Icon name={s.icon} size={26} /></span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '21px', color: 'var(--text-strong)', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------- PROCESS ---------- */}
      <Section bg="var(--surface-brand)">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }} className="jj-process-grid">
          <div>
            <div className="jj-eyebrow" style={{ color: 'var(--green-300)', marginBottom: '14px' }}>How it works</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>Simple from hello to launch.</h2>
            <p style={{ marginTop: '16px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>You don’t need to know anything technical. That’s our job. Here’s the whole thing, start to finish.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {steps.map((st, i) => (
              <div key={st.n} style={{ display: 'flex', gap: '20px', padding: '22px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 500, color: 'var(--gold-400)', flex: 'none', width: '40px' }}>{st.n}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '19px', color: '#fff', margin: '0 0 6px' }}>{st.title}</h3>
                  <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>{st.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- TESTIMONIALS ---------- */}
      <Section>
        <SectionHeading eyebrow="In their words" title="The part we’re proudest of" lead="We measure our work by whether your phone rings. Here’s what a few owners had to say." />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '22px' }} className="jj-testi-grid">
          <Testimonial featured rating={5}
            quote="They made the whole thing painless. I told them what my shop was about over coffee, and a few weeks later I had a site that actually looks like us — and the phone hasn’t stopped."
            name="Maria Alvarez" business="Owner, Alvarez Family Dental" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <Testimonial rating={5} quote="No jargon, no runaround. Felt like hiring a friend who happens to be brilliant at this." name="Tom Becker" business="Becker & Sons Roofing" />
            <Testimonial rating={5} quote="Bookings went up the first week. Honestly wish I’d done it two years ago." name="Priya Shah" business="Pine Street Cafe" />
          </div>
        </div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section bg="var(--paper-2)">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }} className="jj-faq-grid">
          <SectionHeading align="left" eyebrow="Good questions" title="The things people ask us most" lead="And if yours isn’t here, just ask — we’re friendly." />
          <Accordion defaultOpen={[0]} items={[
            { q: 'How much does a website cost?', a: 'Most small-business sites land between a few hundred and a few thousand, depending on size and features. We’ll give you a clear, fixed quote up front — no surprise invoices, ever.' },
            { q: 'How long does it take?', a: 'Most sites go live in 2–4 weeks once we have your content. We’ll give you a realistic timeline at the start and keep you posted along the way.' },
            { q: 'I’m not technical at all. Is that a problem?', a: 'Not even slightly — most of our clients aren’t. We handle the technical side and explain everything in plain language. You only make the fun decisions.' },
            { q: 'Who owns the website when we’re done?', a: 'You do, completely. The site, the domain, the content — all yours to keep, move, or hand to someone else down the road.' },
            { q: 'What happens after it launches?', a: 'We stick around. You can reach a real person for updates and small changes, and we offer simple monthly care plans if you’d like us to handle it for you.' },
          ]} />
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <CTABand onNavigate={onNavigate} />
    </div>
  );
}

function CTABand({ onNavigate }) {
  const { Button } = window.DesignSystemJJ_a7a2a8;
  const Icon = window.JJIcon;
  return (
    <div style={{ padding: '0 var(--gutter-lg) var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', background: 'var(--surface-brand-deep)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(30px, 4.5vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: 0, maxWidth: '20ch', marginInline: 'auto' }}>Let’s build something you’re proud to share.</h2>
          <p style={{ marginTop: '18px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)', maxWidth: '50ch', marginInline: 'auto' }}>Book a free, no-pressure chat. We’ll talk about your business, answer your questions, and tell you honestly if we’re the right fit.</p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNavigate('contact')}>Book a free chat</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.JJHome = Home;
