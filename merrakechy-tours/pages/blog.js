import Layout from '../components/Layout';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';

export async function getStaticProps() {
  const posts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'blog.json'), 'utf-8'));
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <Layout title="Blog | Merrakechy Tours" description="Travel tips, tour guides, and Morocco travel inspiration from Merrakechy Tours.">
      <section style={{ background: 'var(--night)', paddingTop: 140, paddingBottom: 80, textAlign: 'center', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="container">
          <span className="section-label">Travel Inspiration</span>
          <h1 className="section-title light" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>Our Blog</h1>
          <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.55)' }}>
            Tips, guides, and stories from Morocco.
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container">
          <div className="grid-3">
            {posts.map(post => (
              <article className="card" key={post.id}>
                <div className="card-img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="card-badge">{post.category}</div>
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span><i className="fas fa-calendar" style={{ color: 'var(--gold)' }}></i> {post.date}</span>
                    <span><i className="fas fa-user" style={{ color: 'var(--gold)' }}></i> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="btn btn-outline-gold">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
