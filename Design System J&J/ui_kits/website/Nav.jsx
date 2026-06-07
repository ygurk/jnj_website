/* J&J Studios website — top navigation */
function Nav({ current, onNavigate }) {
  const { Button } = window.DesignSystemJJ_a7a2a8;
  const Icon = window.JJIcon;
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Our work' },
    { id: 'contact', label: 'Contact' },
  ];

  const go = (id) => { onNavigate(id); setOpen(false); };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
      backdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '14px var(--gutter-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
      }}>
        <button onClick={() => go('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo-horizontal.svg" alt="J&amp;J Studios" style={{ height: '38px', display: 'block' }} />
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="jj-desktop-nav">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: '15px',
                fontWeight: current === l.id ? 600 : 500,
                color: current === l.id ? 'var(--green-800)' : 'var(--text-muted)',
                padding: '8px 14px', borderRadius: 'var(--radius-md)',
              }}
              onMouseEnter={(e) => { if (current !== l.id) e.currentTarget.style.color = 'var(--green-800)'; }}
              onMouseLeave={(e) => { if (current !== l.id) e.currentTarget.style.color = 'var(--text-muted)'; }}
            >{l.label}</button>
          ))}
          <span style={{ marginLeft: '10px' }}>
            <Button variant="accent" size="sm" iconRight={<Icon name="arrowRight" size={16} />} onClick={() => go('contact')}>
              Book a free chat
            </Button>
          </span>
        </nav>

        <button className="jj-mobile-toggle" onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', padding: '8px', cursor: 'pointer', color: 'var(--green-800)' }}>
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {open && (
        <div className="jj-mobile-menu" style={{ borderTop: '1px solid var(--border-subtle)', padding: '12px var(--gutter)', display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--paper)' }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: 'var(--text-strong)', padding: '12px 8px', borderRadius: 'var(--radius-md)' }}>{l.label}</button>
          ))}
          <div style={{ padding: '8px' }}>
            <Button variant="accent" fullWidth onClick={() => go('contact')}>Book a free chat</Button>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 720px){
          .jj-desktop-nav{ display:none !important; }
          .jj-mobile-toggle{ display:flex !important; }
        }
      `}</style>
    </header>
  );
}

window.JJNav = Nav;
