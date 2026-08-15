// TOTVS Gestão — app shell: Sidebar + Topbar. Exports to window for screens.jsx.
const DS = window.TOTVSDesignSystem_be3538;

const Icon = ({ n, size = 20, color }) => (
  <i className={"ph ph-" + n} style={{ fontSize: size, color, lineHeight: 1, display: 'inline-flex' }} />
);

function Sidebar({ active, onNavigate }) {
  const items = [
    { id: 'dashboard', label: 'Visão geral', icon: 'squares-four' },
    { id: 'pedidos', label: 'Pedidos', icon: 'receipt' },
    { id: 'clientes', label: 'Clientes', icon: 'users-three' },
    { id: 'financeiro', label: 'Financeiro', icon: 'chart-line-up' },
    { id: 'estoque', label: 'Estoque', icon: 'package' },
    { id: 'relatorios', label: 'Relatórios', icon: 'file-text' },
  ];
  return (
    <aside style={{
      width: 248, flex: '0 0 248px', background: 'var(--totvs-dark)', color: '#fff',
      display: 'flex', flexDirection: 'column', padding: '22px 16px', boxSizing: 'border-box',
      borderRight: '1px solid var(--navy-700)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', right: -200, top: -120,
        background: 'radial-gradient(circle, transparent 40%, rgba(0,219,255,.09) 41%, rgba(0,219,255,.09) 52%, transparent 53%)' }} />
      <img src="../../assets/totvs-gestao-white.svg?v=2" alt="TOTVS Gestão" style={{ height: 30, marginLeft: 8, marginBottom: 30 }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const on = it.id === active;
          return (
            <button key={it.id} onClick={() => onNavigate(it.id)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', borderRadius: 'var(--radius-md)',
              border: 'none', cursor: 'pointer', textAlign: 'left',
              background: on ? 'rgba(0,219,255,.14)' : 'transparent',
              color: on ? 'var(--totvs-cyan)' : 'var(--navy-300)',
              fontFamily: 'var(--font-display)', fontWeight: on ? 700 : 600, fontSize: 14,
              transition: 'var(--transition-base)',
            }}
            onMouseEnter={e => { if (!on) e.currentTarget.style.background = 'rgba(255,255,255,.05)'; }}
            onMouseLeave={e => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
              <Icon n={it.icon} color={on ? 'var(--totvs-cyan)' : 'var(--navy-300)'} />
              {it.label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', padding: 14, borderRadius: 'var(--radius-lg)', background: 'var(--navy-700)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Precisa de ajuda?</div>
        <div style={{ fontSize: 12, color: 'var(--navy-300)', lineHeight: 1.45, marginBottom: 10 }}>
          A gente analisa seu cenário e indica o melhor caminho.
        </div>
        <DS.Button variant="cyan" size="sm" fullWidth>Falar com a TOTVS</DS.Button>
      </div>
    </aside>
  );
}

function Topbar({ title, subtitle }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 16, padding: '18px 32px',
      borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-.01em',
          color: 'var(--text-strong)', margin: 0 }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '3px 0 0' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 44, padding: '0 14px', borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--border-strong)', color: 'var(--text-muted)', minWidth: 220 }}>
        <Icon n="magnifying-glass" size={18} color="var(--text-muted)" />
        <span style={{ fontSize: 14 }}>Buscar pedidos, clientes…</span>
      </div>
      <button style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-strong)',
        background: 'var(--surface-card)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon n="bell" size={20} color="var(--text-strong)" />
      </button>
      <DS.Avatar name="Ana Lima" tone="cyan" />
    </header>
  );
}

Object.assign(window, { Icon, Sidebar, Topbar });
