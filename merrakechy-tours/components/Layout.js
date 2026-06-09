import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || 'Merrakechy Tours | #1 Morocco Tours from Marrakech'}</title>
        <meta name="description" content={description || 'Authentic Morocco tours, desert adventures, activities & transfers from Marrakech. 500+ 5-star reviews.'} />
        <link rel="icon" href="/assets/images/Logos/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">MERRAKECHY TOURS</Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services#activities">Activities</Link>
            <Link href="/services#tours">Tours</Link>
            <Link href="/services#transport">Transport</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://wa.me/+212666698732" target="_blank" rel="noopener" className="nav-cta">Book Now</a>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">MERRAKECHY TOURS</span>
              <p>We provide authentic travel experiences across Morocco — from the Sahara dunes to the Atlantic coast — with expert local guides, modern vehicles, and genuine Moroccan hospitality.</p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/merrakechytours/" className="social-link" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link" aria-label="TripAdvisor"><i className="fab fa-tripadvisor"></i></a>
                <a href="https://wa.me/+212666698732" className="social-link" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services#activities">Activities</Link></li>
                <li><Link href="/services#tours">Tours</Link></li>
                <li><Link href="/services#transport">Transport</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-links">
                <li><a href="tel:+212666698732">+212 666 698 732</a></li>
                <li><a href="mailto:contact@merrakechytours.com">contact@merrakechytours.com</a></li>
                <li><span style={{color:'rgba(255,255,255,0.5)'}}>Bab Al Khmis, Marrakech</span></li>
                <li><span style={{color:'rgba(255,255,255,0.5)'}}>Open daily 08:00 – 20:00</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Merrakechy Tours. All rights reserved.</p>
            <p>Built with ♥ in Marrakech</p>
          </div>
        </div>
      </footer>
    </>
  );
}
