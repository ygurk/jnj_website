/* J&J Studios website — Our Work page (case studies + before/after) */
function Work({ onNavigate }) {
  const { Button, Card, Badge } = window.DesignSystemJJ_a7a2a8;
  const { JJSection: Section, JJSectionHeading: SectionHeading, JJPhotoSlot: PhotoSlot } = window;
  const Icon = window.JJIcon;

  const cases = [
    { tag: 'Dental clinic', title: 'Alvarez Family Dental', blurb: 'A dated, hard-to-read site became a calm, modern one with online booking front and centre.', result: 'New-patient enquiries doubled in the first month.', icon: 'sparkles', tone: 'green' },
    { tag: 'Cafe', title: 'Pine Street Cafe', blurb: 'A one-page menu and a clear “find us” turned casual searchers into walk-ins and weekend bookings.', result: 'Weekend bookings up 60%.', icon: 'heart', tone: 'gold' },
    { tag: 'Roofing', title: 'Becker & Sons Roofing', blurb: 'A trustworthy, photo-led site with quote requests made it easy to choose them over the big franchises.', result: '30+ quote requests a month.', icon: 'shieldCheck', tone: 'green' },
  ];

  return (
    <div>
      {/* header */}
      <Section pad="clamp(48px, 6vw, 72px)">
        <SectionHeading align="left" eyebrow="Our work"
          title="Real sites, for real small businesses"
          lead="We don’t do flashy for the sake of it. We build sites that look like you and quietly bring in the work. Here are a few." />
      </Section>

      {/* featured before/after */}
      <div style={{ padding: '0 var(--gutter-lg)', marginBottom: 'var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Card padding="lg" tone="cream">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Badge variant="brand">Featured</Badge>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-strong)' }}>Alvarez Family Dental</span>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, color: 'var(--green-700)' }}><Icon name="trendingUp" size={19} /> New-patient enquiries doubled</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '18px', alignItems: 'center' }} className="jj-ba-grid">
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '10px' }}>Before</div>
                <PhotoSlot label="Old site" icon="x" ratio="16 / 10" tone="cream" />
              </div>
              <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--green-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }} className="jj-ba-arrow"><Icon name="arrowRight" size={20} /></span>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: '10px' }}>After</div>
                <PhotoSlot label="New site" icon="check" ratio="16 / 10" tone="green" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* case grid */}
      <Section pad="0">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          {cases.map((c) => (
            <Card key={c.title} padding="none" interactive>
              <PhotoSlot label={c.tag} icon={c.icon} ratio="16 / 10" tone={c.tone} radius="var(--radius-lg) var(--radius-lg) 0 0" />
              <div style={{ padding: 'var(--space-6)' }}>
                <Badge variant="neutral" size="sm">{c.tag}</Badge>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '23px', fontWeight: 600, color: 'var(--text-strong)', margin: '12px 0 8px' }}>{c.title}</h3>
                <p style={{ margin: '0 0 16px', fontSize: '15.5px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{c.blurb}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', fontWeight: 600, color: 'var(--green-700)', background: 'var(--green-50)', padding: '8px 13px', borderRadius: 'var(--radius-md)' }}>
                  <Icon name="trendingUp" size={17} /> {c.result}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* small CTA */}
      <Section>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 16px' }}>Could yours be next?</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '44ch', margin: '0 auto 26px' }}>Tell us about your business. We’ll be honest about whether we can help and what it would take.</p>
          <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNavigate('contact')}>Book a free chat</Button>
        </div>
      </Section>
    </div>
  );
}

window.JJWork = Work;
