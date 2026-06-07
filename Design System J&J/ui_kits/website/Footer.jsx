/* J&J Studios website — footer */
function Footer({ onNavigate }) {
  const Icon = window.JJIcon;
  const col = { display: 'flex', flexDirection: 'column', gap: '10px' };
  const link = { background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-on-brand-muted)' };
  return (
    <footer style={{ background: 'var(--surface-brand-deep)', color: 'var(--text-on-brand)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--gutter-lg) 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="../../assets/logo-badge.svg" alt="" style={{ height: '40px' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#fff' }}>J&amp;J Studios</span>
            </div>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>
              Two people who build fast, friendly websites for small businesses. We keep it simple, and we don't disappear after launch.
            </p>
          </div>
          <div style={col}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: '4px' }}>Studio</span>
            <button style={link} onClick={() => onNavigate('home')}>Home</button>
            <button style={link} onClick={() => onNavigate('work')}>Our work</button>
            <button style={link} onClick={() => onNavigate('contact')}>Contact</button>
          </div>
          <div style={col}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: '4px' }}>Get in touch</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--text-on-brand-muted)' }}><Icon name="mail" size={17} /> hello@jjstudios.co</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--text-on-brand-muted)' }}><Icon name="phone" size={17} /> (555) 248‑1199</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--text-on-brand-muted)' }}><Icon name="clock" size={17} /> Replies within a day</span>
          </div>
        </div>
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', fontSize: '13.5px', color: 'var(--text-on-brand-muted)' }}>
          <span>© 2026 J&amp;J Studios — Jakob &amp; Jakob. All rights reserved.</span>
          <span>Made by hand, in our two-person studio.</span>
        </div>
      </div>
    </footer>
  );
}

window.JJFooter = Footer;
