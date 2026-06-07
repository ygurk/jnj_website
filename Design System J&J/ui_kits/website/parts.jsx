/* J&J Studios website — shared layout parts */

/* Section wrapper with consistent vertical rhythm */
function Section({ children, bg = 'transparent', pad = 'var(--section-y)', id }) {
  return (
    <section id={id} style={{ background: bg, paddingTop: pad, paddingBottom: pad }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-lg)' }}>
        {children}
      </div>
    </section>
  );
}

/* Eyebrow + serif heading + optional lead, centered or left */
function SectionHeading({ eyebrow, title, lead, align = 'center', maxWidth = '34ch' }) {
  return (
    <div style={{ textAlign: align, marginInline: align === 'center' ? 'auto' : 0, maxWidth: align === 'center' ? '44ch' : 'none', marginBottom: 'var(--space-12)' }}>
      {eyebrow && <div className="jj-eyebrow" style={{ marginBottom: '14px' }}>{eyebrow}</div>}
      <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--text-strong)', margin: 0 }}>{title}</h2>
      {lead && <p style={{ marginTop: '16px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth, marginInline: align === 'center' ? 'auto' : 0 }}>{lead}</p>}
    </div>
  );
}

/* Tasteful image placeholder — warm tint + icon + caption */
function PhotoSlot({ label = 'Photo', icon = 'sparkles', ratio = '4 / 3', tone = 'green', radius = 'var(--radius-lg)', style }) {
  const Icon = window.JJIcon;
  const tones = {
    green: { bg: 'linear-gradient(140deg, var(--green-100), var(--green-200))', fg: 'var(--green-700)' },
    gold:  { bg: 'linear-gradient(140deg, var(--gold-100), var(--gold-200))', fg: 'var(--gold-800)' },
    cream: { bg: 'var(--surface-sunken)', fg: 'var(--text-faint)' },
  };
  const t = tones[tone] || tones.green;
  return (
    <div style={{ aspectRatio: ratio, width: '100%', background: t.bg, borderRadius: radius, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', color: t.fg, ...style }}>
      <Icon name={icon} size={30} strokeWidth={1.6} />
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

/* Mock browser frame for showing a client site */
function BrowserFrame({ children, url = 'yourbusiness.com', style }) {
  return (
    <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-default)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--paper-2)' }}>
        <span style={{ display: 'flex', gap: '6px' }}>
          <i style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#E0A6A6' }} />
          <i style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EAD09A' }} />
          <i style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#A9D3B6' }} />
        </span>
        <span style={{ marginLeft: '8px', flex: 1, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', padding: '5px 14px', fontSize: '12.5px', color: 'var(--text-faint)', fontFamily: 'var(--font-sans)', textAlign: 'center' }}>{url}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

/* Star rating row */
function Stars({ n = 5, size = 18 }) {
  const Icon = window.JJIcon;
  return (
    <span style={{ display: 'inline-flex', gap: '2px', color: 'var(--gold-600)' }}>
      {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} fill="currentColor" strokeWidth={0} />)}
    </span>
  );
}

Object.assign(window, { JJSection: Section, JJSectionHeading: SectionHeading, JJPhotoSlot: PhotoSlot, JJBrowserFrame: BrowserFrame, JJStars: Stars });
