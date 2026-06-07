/* J&J Studios website — Contact page (lead form + reassurance) */
function Contact() {
  const { Button, Input, Textarea, Select, Checkbox, Card } = window.DesignSystemJJ_a7a2a8;
  const Icon = window.JJIcon;
  const [sent, setSent] = React.useState(false);

  const reassurances = [
    { icon: 'clock', title: 'We reply within a day', body: 'Usually much sooner. A real person, not an auto-responder.' },
    { icon: 'messageCircle', title: 'No pressure, ever', body: 'A first chat is just a chat. We’ll tell you honestly if we’re not the right fit.' },
    { icon: 'shieldCheck', title: 'Clear, fixed quotes', body: 'You’ll know the price up front. No surprise invoices later.' },
  ];

  return (
    <div style={{ background: 'var(--paper-2)', minHeight: '70vh' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) var(--gutter-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)', gap: 'clamp(36px, 5vw, 72px)', alignItems: 'start' }} className="jj-contact-grid">

          {/* left — pitch + reassurance */}
          <div>
            <div className="jj-eyebrow" style={{ marginBottom: '14px' }}>Let’s talk</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(34px, 5vw, 50px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0 }}>Tell us about your business.</h1>
            <p style={{ marginTop: '18px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '40ch' }}>
              Fill this in and we’ll be in touch for a friendly, no-obligation chat. Prefer the phone? Call us — we’d love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '34px' }}>
              {reassurances.map((r) => (
                <div key={r.title} style={{ display: 'flex', gap: '14px' }}>
                  <span style={{ width: '44px', height: '44px', flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--green-50)', color: 'var(--green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={r.icon} size={22} /></span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--text-strong)' }}>{r.title}</div>
                    <div style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{r.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '34px', paddingTop: '26px', borderTop: '1px solid var(--border-default)', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '15.5px', color: 'var(--text-body)' }}><Icon name="mail" size={18} style={{ color: 'var(--green-600)' }} /> hello@jjstudios.co</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '15.5px', color: 'var(--text-body)' }}><Icon name="phone" size={18} style={{ color: 'var(--green-600)' }} /> (555) 248‑1199</span>
            </div>
          </div>

          {/* right — the form */}
          <Card padding="lg" style={{ boxShadow: 'var(--shadow-md)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <span style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--green-50)', color: 'var(--green-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Icon name="check" size={34} /></span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 500, color: 'var(--text-strong)', margin: '0 0 10px' }}>Thanks — message received!</h3>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '34ch', margin: '0 auto 24px' }}>One of us (a Jakob) will get back to you within a day. Talk soon.</p>
                <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '20px', color: 'var(--text-strong)', margin: 0 }}>Start your free quote</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="jj-form-row">
                  <Input label="Your name" placeholder="Jane Smith" required />
                  <Input label="Business name" placeholder="Jane’s Bakery" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="jj-form-row">
                  <Input label="Email" type="email" placeholder="you@business.com" required />
                  <Input label="Phone" type="tel" placeholder="Optional" />
                </div>
                <Select label="What do you need?" placeholder="Choose one"
                  options={['A brand-new website', 'A redesign of my current site', 'Just a refresh', 'Ongoing care', 'Not sure yet — let’s talk']} />
                <Textarea label="Tell us a little about it" rows={4} placeholder="What does your business do, and what would you love the website to do for you?" />
                <Checkbox label="It’s fine to email me the occasional helpful tip. No spam, promise." defaultChecked />
                <Button type="submit" variant="accent" size="lg" fullWidth iconRight={<Icon name="arrowRight" size={18} />}>Send my message</Button>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center' }}>We’ll only use your details to reply. Never shared, never sold.</p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

window.JJContact = Contact;
