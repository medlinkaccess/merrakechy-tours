import Layout from '../components/Layout';
import path from 'path';
import fs from 'fs';

export async function getStaticProps() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'services.json'), 'utf-8'));
  return { props: data };
}

export default function Services({ activities, tours, transport }) {
  return (
    <Layout title="Our Services | Merrakechy Tours" description="Browse all Morocco tours, activities and transport services from Marrakech.">
      {/* Page Hero */}
      <section style={{
        background: 'var(--night)', paddingTop: 140, paddingBottom: 80,
        textAlign: 'center', borderBottom: '1px solid rgba(201,168,76,0.15)'
      }}>
        <div className="container">
          <span className="section-label">Everything You Need</span>
          <h1 className="section-title light" style={{fontSize: 'clamp(2.5rem,5vw,4rem)'}}>Our Services</h1>
          <p className="section-subtitle" style={{margin:'0 auto', color:'rgba(255,255,255,0.55)'}}>
            Activities, guided tours, and transport — all in one place.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-padding bg-sand" id="activities">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get Active</span>
            <h2 className="section-title">Activities</h2>
            <p className="section-subtitle">Thrilling adventures across Marrakech and beyond.</p>
          </div>
          <div className="grid-3">
            {activities.map(item => (
              <article className="card" key={item.id}>
                <div className="card-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="card-price">{item.price}</div>
                  {item.badge && <div className="card-badge">{item.badge}</div>}
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    {item.location && <span><i className="fas fa-map-marker-alt" style={{color:'var(--gold)'}}></i> {item.location}</span>}
                    {item.duration && <span><i className="fas fa-clock" style={{color:'var(--gold)'}}></i> {item.duration}</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.whatsapp} target="_blank" rel="noopener" className="btn btn-outline-gold">
                    <i className="fab fa-whatsapp"></i> Book Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section className="section-padding" id="tours">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Day Trips & Multi-Day</span>
            <h2 className="section-title">Guided Tours</h2>
            <p className="section-subtitle">Morocco's finest destinations with expert local guides.</p>
          </div>
          <div className="grid-3">
            {tours.map(item => (
              <article className="card" key={item.id}>
                <div className="card-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="card-price">{item.price}</div>
                  {item.badge && <div className="card-badge">{item.badge}</div>}
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    {item.duration && <span><i className="fas fa-clock" style={{color:'var(--gold)'}}></i> {item.duration}</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.whatsapp} target="_blank" rel="noopener" className="btn btn-outline-gold">
                    <i className="fab fa-whatsapp"></i> Book Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="section-padding bg-night" id="transport">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Private & Shared</span>
            <h2 className="section-title light">Transport</h2>
            <p className="section-subtitle" style={{color:'rgba(255,255,255,0.55)'}}>
              Comfortable, reliable transfers across Morocco.
            </p>
          </div>
          <div className="grid-3">
            {transport.map(item => (
              <div className="dark-card" key={item.id}>
                <div className="dark-card-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="dark-card-body">
                  <h3>{item.title}</h3>
                  <span className="price-tag">{item.price}</span>
                  <p>{item.description}</p>
                  <a href={item.whatsapp} target="_blank" rel="noopener" className="btn btn-outline-light">
                    <i className="fab fa-whatsapp"></i> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
