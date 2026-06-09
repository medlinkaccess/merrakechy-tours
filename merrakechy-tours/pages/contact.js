import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact Us | Merrakechy Tours" description="Get in touch with Merrakechy Tours for bookings, custom itineraries, and any questions.">
      <section style={{ background: 'var(--night)', paddingTop: 140, paddingBottom: 80, textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">We&apos;re Here to Help</span>
          <h1 className="section-title light" style={{fontSize: 'clamp(2.5rem,5vw,4rem)'}}>Contact Us</h1>
          <p className="section-subtitle" style={{margin:'0 auto', color:'rgba(255,255,255,0.55)'}}>
            Reach out on WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'start'}}>
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Let&apos;s Plan Your Morocco Adventure</h2>
              <p style={{color:'var(--mid)', marginBottom:32, lineHeight:1.75}}>
                Whether you&apos;re booking a single activity or a full multi-day itinerary, our team responds within minutes on WhatsApp.
              </p>
              <div style={{display:'flex', flexDirection:'column', gap:20}}>
                {[
                  { icon: 'fa-whatsapp fab', label: 'WhatsApp', value: '+212 666 698 732', href: 'https://wa.me/+212666698732' },
                  { icon: 'fa-envelope fas', label: 'Email', value: 'contact@merrakechytours.com', href: 'mailto:contact@merrakechytours.com' },
                  { icon: 'fa-phone fas', label: 'Phone', value: '+212 666 698 732', href: 'tel:+212666698732' },
                  { icon: 'fa-map-marker-alt fas', label: 'Address', value: 'Bab Al Khmis, Marrakech 40000, Morocco', href: null },
                ].map(item => (
                  <div key={item.label} style={{display:'flex', gap:16, alignItems:'flex-start'}}>
                    <div style={{width:44, height:44, borderRadius:'50%', background:'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'var(--gold)', fontSize:'0.9rem'}}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <div style={{fontSize:'0.75rem', fontWeight:700, letterSpacing:1, textTransform:'uppercase', color:'var(--mid)', marginBottom:2}}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{color:'var(--ink)', fontWeight:500}} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{item.value}</a>
                      ) : (
                        <span style={{color:'var(--ink)'}}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:'var(--sand)', padding:40, borderRadius:8}}>
              <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:8}}>Send a WhatsApp Message</h3>
              <p style={{color:'var(--mid)', fontSize:'0.9rem', marginBottom:24}}>Choose your inquiry type and we&apos;ll respond instantly.</p>
              <div style={{display:'flex', flexDirection:'column', gap:12}}>
                {[
                  { label: '🏜️ Book a Tour', msg: 'Hello, I want to book a tour' },
                  { label: '🏍️ Book an Activity', msg: 'Hello, I want to book an activity' },
                  { label: '🚗 Book Transport', msg: 'Hello, I need transport/transfer' },
                  { label: '💬 General Enquiry', msg: 'Hello, I have a question about your services' },
                ].map(item => (
                  <a
                    key={item.label}
                    href={`https://wa.me/+212666698732?text=${encodeURIComponent(item.msg)}`}
                    target="_blank" rel="noopener"
                    className="btn btn-outline-gold"
                    style={{width:'100%', justifyContent:'center'}}
                  >
                    <i className="fab fa-whatsapp"></i> {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
