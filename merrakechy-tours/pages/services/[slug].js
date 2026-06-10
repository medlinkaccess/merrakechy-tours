import data from "../../data/services.json";

const all = [
  ...data.activities.map(i => ({ ...i, category: "activities" })),
  ...data.tours.map(i => ({ ...i, category: "tours" })),
  ...data.transport.map(i => ({ ...i, category: "transport" })),
];

export async function getStaticPaths() {
  const paths = all.map((item) => ({
    params: { slug: item.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = all.find((i) => i.id === params.slug);
  return { props: { item } };
}

export default function ServicePage({ item }) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem", fontFamily: "Georgia, serif" }}>
      <a href="/services" style={{ color: "#b8860b", textDecoration: "none", fontSize: "0.9rem" }}>
        Back to Services
      </a>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", borderRadius: 12, margin: "1.5rem 0", maxHeight: 400, objectFit: "cover" }}
      />
      {item.badge && (
        <span style={{ background: "#b8860b", color: "white", padding: "4px 14px", borderRadius: 20, fontSize: "0.8rem" }}>
          {item.badge}
        </span>
      )}
      <h1 style={{ fontSize: "2rem", margin: "1rem 0 0.5rem" }}>{item.title}</h1>
      <p style={{ color: "#666", marginBottom: "0.5rem" }}>
        {item.location && <>{item.location} · </>}
        {item.duration && <>{item.duration} · </>}
        <strong style={{ color: "#b8860b" }}>{item.price}</strong>
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.8, margin: "1.5rem 0" }}>{item.description}</p>
      <a href={item.whatsapp} target="_blank" rel="noopener noreferrer">
        <button style={{
          background: "#25D366",
          color: "white",
          padding: "14px 36px",
          border: "none",
          borderRadius: 8,
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          Book via WhatsApp
        </button>
      </a>
    </main>
  );
}
