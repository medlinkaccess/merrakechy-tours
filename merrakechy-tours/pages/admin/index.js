import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { checkAuth } from '../../lib/auth';

export async function getServerSideProps({ req }) {
  if (!checkAuth(req)) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }
  return { props: {} };
}

const CATEGORIES = [
  { key: 'activities', label: 'Activities' },
  { key: 'tours', label: 'Tours' },
  { key: 'transport', label: 'Transport' },
];

const EMPTY_FORM = {
  id: '',
  title: '',
  price: '',
  badge: '',
  location: '',
  duration: '',
  image: '',
  description: '',
  whatsapp: '',
};

export default function Admin() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('activities');
  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | 'add' | 'edit'
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchServices = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin/services');
    if (res.ok) {
      const data = await res.json();
      setServices(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchServices(); }, [fetchServices]);

  async function logout() {
    await fetch('/api/admin/logout');
    router.push('/admin/login');
  }

  function openAdd() {
    setForm({ ...EMPTY_FORM });
    setModal('add');
  }

  function openEdit(item) {
    setForm({ ...EMPTY_FORM, ...item });
    setModal('edit');
  }

  async function handleDelete(id) {
    if (!confirm('Delete this service? This cannot be undone.')) return;
    const res = await fetch(`/api/admin/services?category=${activeTab}&id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Service deleted.');
      fetchServices();
    } else {
      showToast('Failed to delete.', 'error');
    }
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);

    // Auto-generate WhatsApp if empty
    let f = { ...form };
    if (!f.whatsapp && f.title) {
      f.whatsapp = `https://wa.me/+212666698732?text=${encodeURIComponent('Hello, I want to book ' + f.title)}`;
    }

    const method = modal === 'add' ? 'POST' : 'PUT';
    const res = await fetch(`/api/admin/services?category=${activeTab}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(f),
    });
    setSaving(false);
    if (res.ok) {
      setModal(null);
      showToast(modal === 'add' ? 'Service added!' : 'Service updated!');
      fetchServices();
    } else {
      showToast('Failed to save. Check all fields.', 'error');
    }
  }

  const current = services[activeTab] || [];

  return (
    <>
      <Head>
        <title>Admin Dashboard | Merrakechy Tours</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="admin-page">
        {/* Navbar */}
        <div className="admin-navbar">
          <span className="admin-navbar-brand">MERRAKECHY — ADMIN</span>
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <a href="/" target="_blank" rel="noopener" style={{fontSize:'0.85rem', color:'#8b949e'}}>
              <i className="fas fa-external-link-alt"></i> View Site
            </a>
            <button onClick={logout} style={{padding:'6px 16px', background:'transparent', color:'#f85149', border:'1px solid rgba(248,81,73,0.3)', borderRadius:4, fontSize:12, cursor:'pointer'}}>
              Log Out
            </button>
          </div>
        </div>

        <div className="admin-body">
          {/* Sidebar */}
          <div className="admin-sidebar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`sidebar-item ${activeTab === cat.key ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.key)}
              >
                {cat.label}
                <span style={{float:'right', background:'rgba(201,168,76,0.15)', color:'var(--gold)', padding:'1px 8px', borderRadius:10, fontSize:11}}>
                  {(services[cat.key] || []).length}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="admin-content">
            <div className="admin-header-row">
              <div>
                <div className="admin-section-title">
                  {CATEGORIES.find(c => c.key === activeTab)?.label}
                </div>
                <div className="admin-section-sub">
                  Manage your {activeTab} — changes appear on the site immediately.
                </div>
              </div>
              <button className="btn-add" onClick={openAdd}>
                + Add {CATEGORIES.find(c => c.key === activeTab)?.label.slice(0,-1)}
              </button>
            </div>

            {loading ? (
              <div style={{color:'#8b949e', padding:20}}>Loading...</div>
            ) : current.length === 0 ? (
              <div style={{color:'#8b949e', padding:40, textAlign:'center', border:'1px dashed #30363d', borderRadius:8}}>
                No {activeTab} yet. Click &quot;Add&quot; to create the first one.
              </div>
            ) : (
              current.map(item => (
                <div className="admin-card" key={item.id}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="admin-card-img"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  )}
                  <div className="admin-card-info">
                    <div className="admin-card-title">{item.title}</div>
                    <div className="admin-card-meta">
                      {item.price && <span style={{marginRight:12}}>💰 {item.price}</span>}
                      {item.duration && <span style={{marginRight:12}}>⏱ {item.duration}</span>}
                      {item.location && <span>📍 {item.location}</span>}
                    </div>
                  </div>
                  <div className="admin-card-actions">
                    <button className="btn-edit" onClick={() => openEdit(item)}>
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setModal(null); }}>
          <div className="modal">
            <h2>{modal === 'add' ? 'Add New' : 'Edit'} {CATEGORIES.find(c => c.key === activeTab)?.label.slice(0,-1)}</h2>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Title *</label>
                <input className="form-control" value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} placeholder="e.g. Sahara Desert 3-Day Tour" required />
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                <div className="form-group">
                  <label>Price</label>
                  <input className="form-control" value={form.price} onChange={e => setForm(f => ({...f, price: e.target.value}))} placeholder="e.g. From €50" />
                </div>
                <div className="form-group">
                  <label>Badge</label>
                  <input className="form-control" value={form.badge} onChange={e => setForm(f => ({...f, badge: e.target.value}))} placeholder="e.g. Bestseller" />
                </div>
              </div>
              {activeTab !== 'transport' && (
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                  <div className="form-group">
                    <label>Location</label>
                    <input className="form-control" value={form.location} onChange={e => setForm(f => ({...f, location: e.target.value}))} placeholder="e.g. Marrakech" />
                  </div>
                  <div className="form-group">
                    <label>Duration</label>
                    <input className="form-control" value={form.duration} onChange={e => setForm(f => ({...f, duration: e.target.value}))} placeholder="e.g. 3 days" />
                  </div>
                </div>
              )}
              <div className="form-group">
                <label>Image Path</label>
                <input className="form-control" value={form.image} onChange={e => setForm(f => ({...f, image: e.target.value}))} placeholder="/assets/images/activities/myimage.jpg" />
                <small style={{color:'#484f58', fontSize:11, marginTop:4, display:'block'}}>Use the path relative to the /public folder, or a full URL.</small>
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea className="form-control" value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} placeholder="A compelling description of this service..." required />
              </div>
              <div className="form-group">
                <label>WhatsApp Booking URL <small style={{color:'#484f58'}}>(auto-generated if empty)</small></label>
                <input className="form-control" value={form.whatsapp} onChange={e => setForm(f => ({...f, whatsapp: e.target.value}))} placeholder="https://wa.me/+212666698732?text=..." />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setModal(null)}>Cancel</button>
                <button type="submit" className="btn-save" disabled={saving}>
                  {saving ? 'Saving...' : modal === 'add' ? 'Add Service' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <div className={`toast toast-${toast.type}`}>{toast.msg}</div>
      )}
    </>
  );
}
