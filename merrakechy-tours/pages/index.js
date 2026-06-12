import ChatBot from '../components/ChatBot';
import Layout from '../components/Layout';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';

export async function getStaticProps() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'services.json'), 'utf-8'));
  return {
    props: {
      activities: data.activities.slice(0, 3),
      tours: data.tours.slice(0, 3),
      transport: data.transport.slice(0, 3),
    },
  };
}

export default function Home({ activities, tours, transport }) {
  return (
    <Layout>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <span className="hero-label">Authentic Morocco Experiences</span>
          <h1 className="hero-title">
            Discover the <em>Magic</em><br />of Morocco
          </h1>
          <p className="hero-sub">
            Expert-guided tours, thrilling activities & reliable transport from Marrakech.<br />
            500+ five-star reviews from travellers worldwide.
          </p>
          <div className="hero-actions">
            <Link href="/services#activities" className="btn btn-gold">Explore Activities</Link>
            <a href="https://wa.me/+212666698732" target="_blank" rel="noopener" className="btn btn-outline-light">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-padding bg-sand" id="activities">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Thrilling Experiences</span>
            <h2 className="section-title">Popular Activities</h2>
            <p className="section-subtitle">From quad biking in the Palmeraie to sunrise balloon flights over the Atlas — unforgettable adventures await.</p>
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
          <div className="text-center" style={{marginTop: 40}}>
            <Link href="/services#activities" className="btn btn-gold">View All Activities</Link>
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section className="section-padding" id="tours">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Day Trips & Multi-Day</span>
            <h2 className="section-title">Guided Tours</h2>
            <p className="section-subtitle">Explore Morocco's most iconic destinations with our expert local guides — Sahara, Atlas Mountains, coastal gems and beyond.</p>
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
          <div className="text-center" style={{marginTop: 40}}>
            <Link href="/services#tours" className="btn btn-gold">View All Tours</Link>
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="section-padding bg-night" id="transport">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Private & Shared</span>
            <h2 className="section-title light">Transport Services</h2>
            <p className="section-subtitle" style={{color:'rgba(255,255,255,0.55)'}}>Reliable, comfortable transfers across Morocco — from airport pickups to cross-country journeys.</p>
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

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-sand">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">Why Choose Merrakechy Tours</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '⭐', title: '500+ Five-Star Reviews', desc: 'Consistently rated 4.9/5 on Google by travellers from around the world.' },
              { icon: '🧭', title: 'Expert Local Guides', desc: 'Born and raised in Morocco, our guides bring destinations to life with insider knowledge.' },
              { icon: '🚗', title: 'Modern Fleet', desc: 'Air-conditioned vehicles maintained to the highest standards for your comfort.' },
              { icon: '💬', title: 'Multilingual Team', desc: 'We speak English, French, Spanish, Italian and Arabic — no language barrier.' },
              { icon: '📅', title: 'Flexible Booking', desc: 'Book last minute or plan ahead — we adapt to your schedule.' },
              { icon: '🤝', title: 'Authentic Experiences', desc: 'No tourist traps. Real Moroccan culture, food, and hospitality.' },
            ].map((item, i) => (
              <div className="why-item" key={i}>
                <div className="why-icon">{item.icon}</div>
                <div className="why-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--gold)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--night)', marginBottom: 12 }}>
            Ready to Explore Morocco?
          </h2>
          <p style={{ color: 'rgba(15,12,7,0.7)', marginBottom: 28, fontSize: '1rem' }}>
            Contact us on WhatsApp for instant booking & personalised itineraries
          </p>
          <a href="https://wa.me/+212666698732" target="_blank" rel="noopener" className="btn" style={{ background: 'var(--night)', color: 'var(--gold)', fontSize: '14px', padding: '14px 36px' }}>
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
            </section>

      <ChatBot />
    </Layout>
  );
}
