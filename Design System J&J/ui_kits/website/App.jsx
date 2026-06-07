/* J&J Studios website — app shell / router */
function App() {
  const [page, setPage] = React.useState('home');
  const navigate = (id) => {
    setPage(id);
    const scroller = document.getElementById('jj-scroll');
    if (scroller) scroller.scrollTo({ top: 0, behavior: 'auto' });
  };

  const Nav = window.JJNav, Footer = window.JJFooter;
  const Home = window.JJHome, Work = window.JJWork, Contact = window.JJContact;

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <Nav current={page} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'work' && <Work onNavigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
