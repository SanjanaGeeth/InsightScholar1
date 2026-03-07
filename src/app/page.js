import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container">
          <h3 className="fade-in-up" style={{ marginBottom: '2rem', letterSpacing: '0.2em' }}>AI-Powered Semantic Research Discovery</h3>

          <h1 className="brand-font fade-in-up delay-1" style={{ marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            Intelligent <span className="gradient-text">Academic</span> Search.
          </h1>

          <p className="fade-in-up delay-2 text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Move beyond simple keyword matching to true concept-based discovery using modern machine learning and semantic search technology.
          </p>

          <div className="hero-actions fade-in-up delay-3" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <Link href="/features" className="btn btn-primary">
              Explore Key Features
            </Link>
            <Link href="/how-it-works" className="btn">
              See How It Works
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
          <div style={{ width: '1px', height: '60px', background: 'var(--text-main)', margin: '0 auto' }}></div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="mb-8 fade-in-up md-text-left" style={{ marginBottom: '6rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Key Highlights</h3>
            <h2>Why InsightScholar is the future of literature discovery.</h2>
          </div>

          <div className="minimal-block fade-in-up delay-1">
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Semantic Understanding</h3>
            <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Powered by the SPECTER2 transformer model to capture the deep conceptual meaning of your specific research queries, ignoring semantic noise.</p>
          </div>

          <div className="minimal-block fade-in-up delay-2">
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Concept-Based Discovery</h3>
            <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Find related academic papers even when different terminology is used entirely, breaking out of exact-match silos to reveal orthogonal connections.</p>
          </div>

          <div className="minimal-block fade-in-up delay-1">
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Fast Vector Search</h3>
            <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Utilizing FAISS (Facebook AI Similarity Search) to retrieve the most relevant results from thousands of indexed embeddings in milliseconds.</p>
          </div>

          <div className="minimal-block fade-in-up delay-2">
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Transparent Explanations</h3>
            <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Integration of explainable AI methods (SHAP, Anchor-based rules) to help researchers understand exactly why certain papers are recommended, opening the black box.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
