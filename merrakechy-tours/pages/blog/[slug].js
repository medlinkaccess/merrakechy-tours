import Layout from '../../components/Layout';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';

export async function getStaticPaths() {
  const posts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'blog.json'), 'utf-8'));
  return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'blog.json'), 'utf-8'));
  const post = posts.find(p => p.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <Layout title={`${post.title} | Merrakechy Tours`} description={post.excerpt}>
      <section style={{ background: 'var(--night)', paddingTop: 140, paddingBottom: 60, textAlign: 'center', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="container">
          <span className="section-label">{post.category}</span>
          <h1 className="section-title light" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', maxWidth: 800, margin: '0.5rem auto' }}>{post.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>
            <i className="fas fa-calendar"></i> {post.date} &nbsp;·&nbsp;
            <i className="fas fa-user"></i> {post.author}
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container" style={{ maxWidth: 800 }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 12, marginBottom: '2rem', maxHeight: 450, objectFit: 'cover' }} />
          <div style={{ fontSize: '1.1rem', lineHeight: 1.9, fontFamily: 'Georgia, serif' }}>
            {post.content.map((para, i) => {
              if (para.startsWith('## ')) {
                return <h2 key={i} style={{ fontSize: '1.5rem', margin: '2rem 0 0.5rem', color: 'var(--night)' }}>{para.replace('## ', '')}</h2>;
              }
              return <p key={i} style={{ marginBottom: '1.2rem' }}>{para}</p>;
            })}
          </div>
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/blog" className="btn btn-outline-gold">Back to Blog</Link>
            <a href="https://wa.me/+212666698732" target="_blank" rel="noopener" className="btn btn-outline-gold">
              <i className="fab fa-whatsapp"></i> Book a Tour
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
