// TOTVS Gestão — screens: Login, Dashboard, Pedidos.
const { useState: useStateS } = React;
const DSS = window.TOTVSDesignSystem_be3538;
const IconS = window.Icon;

/* ----------------------------- LOGIN ----------------------------- */
function Login({ onLogin }) {
  const [email, setEmail] = useStateS('ana.lima@empresa.com.br');
  const [pwd, setPwd] = useStateS('••••••••');
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--surface-card)' }}>
      {/* Brand panel */}
      <div style={{ flex: '0 0 44%', background: 'var(--totvs-dark)', color: '#fff', position: 'relative',
        overflow: 'hidden', padding: 48, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', right: -180, bottom: -150, width: 560, height: 560,
          background: "url('../../assets/grafismo/grafismo-blue.png') center/contain no-repeat", opacity: .5 }} />
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(118deg, var(--totvs-dark) 16%, rgba(0,34,51,.82) 44%, rgba(0,34,51,.32) 74%)' }} />
        <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', right: -130, top: -170,
          background: 'radial-gradient(circle, rgba(164,77,255,.15) 0%, transparent 62%)' }} />
        <img src="../../assets/totvs-gestao-white.svg?v=2" alt="TOTVS Gestão" style={{ height: 32, alignSelf: 'flex-start',
          position: 'relative', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,.5))' }} />
        <div style={{ marginTop: 'auto', position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: '.14em',
            textTransform: 'uppercase', color: 'var(--totvs-cyan)', marginBottom: 14 }}>Gestão empresarial</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, lineHeight: 1.05,
            letterSpacing: '-.02em', margin: 0 }}>A gente conecta<br/>gestão, dados e<br/>tecnologia.</h2>
          <p style={{ fontSize: 15, color: 'var(--navy-300)', lineHeight: 1.55, marginTop: 16, maxWidth: 380 }}>
            Integre áreas, automatize rotinas e tome decisões com indicadores em tempo real.
          </p>
        </div>
      </div>
      {/* Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <div style={{ width: 360, maxWidth: '100%' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text-strong)',
            letterSpacing: '-.01em', margin: '0 0 6px' }}>Bem-vindo de volta</h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '0 0 26px' }}>Acesse sua conta para continuar.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DSS.Input label="E-mail corporativo" value={email} onChange={e => setEmail(e.target.value)}
              iconLeft={<i className="ph ph-envelope-simple" />} />
            <DSS.Input label="Senha" type="password" value={pwd} onChange={e => setPwd(e.target.value)}
              iconLeft={<i className="ph ph-lock-simple" />} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <DSS.Checkbox checked onChange={() => {}} label="Manter conectado" />
              <a style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: 'var(--text-link)',
                textDecoration: 'none' }}>Esqueci a senha</a>
            </div>
            <DSS.Button variant="cyan" fullWidth onClick={onLogin}
              iconRight={<i className="ph ph-arrow-right" />}>Entrar</DSS.Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- DASHBOARD --------------------------- */
function Kpi({ label, value, delta, up = true, tone }) {
  return (
    <DSS.Card padding="md" elevation="sm" style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.04em',
          textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
        <DSS.Badge tone={up ? 'success' : 'danger'} emphasis="soft">
          {up ? '▲' : '▼'} {delta}
        </DSS.Badge>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-.02em',
        color: 'var(--text-strong)' }}>{value}</div>
    </DSS.Card>
  );
}

function MiniChart() {
  const bars = [42, 55, 48, 67, 61, 78, 72, 88, 81, 96, 90, 100];
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  return (
    <DSS.Card padding="md" elevation="sm" style={{ flex: '1 1 60%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-strong)' }}>Faturamento</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>Últimos 12 meses</div>
        </div>
        <DSS.Badge tone="cyan" emphasis="soft">2025</DSS.Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 150 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
            <div style={{ width: '100%', height: h + '%', borderRadius: '6px 6px 0 0',
              background: i === bars.length - 1 ? 'var(--totvs-cyan)' : 'var(--cyan-soft)',
              boxShadow: i === bars.length - 1 ? '0 4px 14px rgba(0,219,255,.4)' : 'none' }} />
            <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{months[i]}</span>
          </div>
        ))}
      </div>
    </DSS.Card>
  );
}

function GoalCard() {
  return (
    <DSS.Card padding="md" elevation="sm" style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-strong)' }}>Meta do trimestre</div>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2, marginBottom: 20 }}>R$ 4,2M de R$ 5,0M</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}>
          <span style={{ color: 'var(--text-body)' }}>Vendas</span><span style={{ fontWeight: 700, color: 'var(--text-strong)', fontFamily: 'var(--font-display)' }}>84%</span></div>
          <DSS.ProgressBar value={84} tone="cyan" /></div>
        <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}>
          <span style={{ color: 'var(--text-body)' }}>Novos clientes</span><span style={{ fontWeight: 700, color: 'var(--text-strong)', fontFamily: 'var(--font-display)' }}>62%</span></div>
          <DSS.ProgressBar value={62} tone="gradient" /></div>
        <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}>
          <span style={{ color: 'var(--text-body)' }}>Retenção</span><span style={{ fontWeight: 700, color: 'var(--text-strong)', fontFamily: 'var(--font-display)' }}>91%</span></div>
          <DSS.ProgressBar value={91} tone="navy" /></div>
      </div>
    </DSS.Card>
  );
}

const ORDERS = [
  { id: '#10482', cliente: 'Padaria Pão Quente', valor: 'R$ 12.400', status: 'Pago', tone: 'success', data: '14 jun' },
  { id: '#10481', cliente: 'Móveis Horizonte', valor: 'R$ 38.900', status: 'Em separação', tone: 'cyan', data: '14 jun' },
  { id: '#10480', cliente: 'AgroVale Distribuidora', valor: 'R$ 7.250', status: 'Pendente', tone: 'warning', data: '13 jun' },
  { id: '#10479', cliente: 'Têxtil Bom Tecido', valor: 'R$ 21.100', status: 'Pago', tone: 'success', data: '13 jun' },
  { id: '#10478', cliente: 'Clínica Vida Plena', valor: 'R$ 5.870', status: 'Atrasado', tone: 'danger', data: '12 jun' },
];

function OrdersTable({ rows, onRow, compact }) {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.2fr 1.2fr 0.8fr', gap: 12, padding: '0 16px 10px',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase',
        color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)' }}>
        <span>Pedido</span><span>Cliente</span><span>Status</span><span>Valor</span><span>Data</span>
      </div>
      {rows.map((o, i) => (
        <div key={o.id} onClick={() => onRow && onRow(o)} style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr 1.2fr 1.2fr 0.8fr', gap: 12, padding: '14px 16px',
          alignItems: 'center', borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
          cursor: onRow ? 'pointer' : 'default', borderRadius: 'var(--radius-sm)', transition: 'var(--transition-base)' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-sunken)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{o.id}</span>
          <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{o.cliente}</span>
          <span><DSS.Badge tone={o.tone} dot>{o.status}</DSS.Badge></span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{o.valor}</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{o.data}</span>
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', gap: 16 }}>
        <Kpi label="Faturamento" value="R$ 1,28M" delta="12,4%" up />
        <Kpi label="Pedidos" value="486" delta="8,1%" up />
        <Kpi label="Clientes ativos" value="2.140" delta="3,2%" up />
        <Kpi label="Margem" value="31,5%" delta="1,1%" up={false} />
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <MiniChart />
        <GoalCard />
      </div>
      <DSS.Card padding="md" elevation="sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, padding: '0 16px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-strong)' }}>Pedidos recentes</div>
          <DSS.Button variant="ghost" size="sm" iconRight={<i className="ph ph-arrow-right" />}>Ver todos</DSS.Button>
        </div>
        <OrdersTable rows={ORDERS} />
      </DSS.Card>
    </div>
  );
}

/* ---------------------------- PEDIDOS ---------------------------- */
function Pedidos() {
  const [tab, setTab] = useStateS('todos');
  const [sel, setSel] = useStateS(null);
  const tabs = [
    { id: 'todos', label: 'Todos', badge: ORDERS.length },
    { id: 'abertos', label: 'Em aberto', badge: 3 },
    { id: 'pagos', label: 'Pagos' },
  ];
  const rows = tab === 'pagos' ? ORDERS.filter(o => o.status === 'Pago')
    : tab === 'abertos' ? ORDERS.filter(o => o.status !== 'Pago') : ORDERS;
  return (
    <div style={{ padding: 32, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: 18 }}><DSS.Tabs tabs={tabs} value={tab} onChange={setTab} /></div>
        <DSS.Card padding="sm" elevation="sm"><OrdersTable rows={rows} onRow={setSel} /></DSS.Card>
      </div>
      <DSS.Card padding="md" elevation="md" style={{ flex: '0 0 320px', position: 'sticky', top: 0 }}>
        {sel ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--text-strong)' }}>{sel.id}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{sel.data} · 2025</div>
              </div>
              <DSS.Badge tone={sel.tone} dot>{sel.status}</DSS.Badge>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <Row k="Cliente" v={sel.cliente} />
              <Row k="Valor total" v={sel.valor} strong />
              <Row k="Pagamento" v="Boleto · 30 dias" />
              <Row k="Vendedor" v="Rafael Souza" />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <DSS.Button variant="cyan" size="sm" fullWidth>Aprovar</DSS.Button>
              <DSS.Button variant="secondary" size="sm" fullWidth>Detalhes</DSS.Button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-muted)' }}>
            <i className="ph ph-cursor-click" style={{ fontSize: 30, color: 'var(--grey-400)' }} />
            <p style={{ fontSize: 14, marginTop: 12, lineHeight: 1.5 }}>Selecione um pedido para ver os detalhes.</p>
          </div>
        )}
      </DSS.Card>
    </div>
  );
}
function Row({ k, v, strong }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, paddingBottom: 12, borderBottom: '1px solid var(--border-subtle)' }}>
      <span style={{ color: 'var(--text-muted)' }}>{k}</span>
      <span style={{ color: 'var(--text-strong)', fontWeight: strong ? 700 : 500,
        fontFamily: strong ? 'var(--font-display)' : 'var(--font-text)', textAlign: 'right' }}>{v}</span>
    </div>
  );
}

Object.assign(window, { Login, Dashboard, Pedidos });
