import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container">
          <h3 className="fade-in-up" style={{ marginBottom: '2rem', letterSpacing: '0.2em' }}>Explainable AI Research Paper Recommendations</h3>

          <h1 className="brand-font fade-in-up delay-1" style={{ marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            Intelligent <span className="gradient-text">Academic</span> Search.
          </h1>

          <p className="fade-in-up delay-2 text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            A hybrid recommendation system combining Deep Transformer Embeddings with Tag-Filtering and transparent AI reasoning. Support your research with context, not just keywords.
          </p>

          <div className="hero-actions fade-in-up delay-3" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <Link href="/features" className="btn btn-primary">
              Explore Key Features
            </Link>
            <Link href="/how-it-works" className="btn">
              View System Architecture
            </Link>
          </div>
        </div>

        {/* Background visual element */}
        <div className="fade-in-up delay-3 float-slow" style={{ position: 'absolute', top: '15%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1, borderRadius: '50%' }}></div>
        <div className="fade-in-up delay-2 float-slow" style={{ position: 'absolute', bottom: '20%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(74, 111, 165, 0.05) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1, borderRadius: '50%', animationDelay: '-3s' }}></div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
          <div style={{ width: '1px', height: '60px', background: 'var(--text-main)', margin: '0 auto' }}></div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">

          <div className="image-reveal mb-8" style={{ width: '100%', height: '400px', position: 'relative', marginBottom: '8rem' }}>
            {/* Tech/Network minimal placeholder */}
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
              alt="Cyber network nodes abstract"
              className="scale-on-hover"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) brightness(0.8)' }}
            />
          </div>

          <div className="mb-8 fade-in-up md-text-left" style={{ marginBottom: '6rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Key Highlights</h3>
            <h2>Why InsightScholar is the future of literature discovery.</h2>
          </div>

          <div className="grid-2" style={{ marginBottom: '4rem' }}>
            <div className="minimal-block fade-in-up delay-1">
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Semantic Understanding</h3>
              <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Powered by advanced Transformer models like SciBERT and SPECTER to capture the deep conceptual meaning of your specific research queries, ignoring semantic noise.</p>
            </div>

            <div className="minimal-block fade-in-up delay-2">
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Hybrid Retrieval Pipeline</h3>
              <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Combines dense semantic representations with Tag and Metadata filtering. This hybrid approach resolves cold-start issues, ensuring new papers and obscure topics aren't missed.</p>
            </div>
          </div>

          <div className="image-reveal" style={{ width: '100%', height: '300px', position: 'relative', marginBottom: '4rem' }}>
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
              alt="Data streams abstract"
              className="scale-on-hover"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2)' }}
            />
          </div>

          <div className="grid-2">
            <div className="minimal-block fade-in-up delay-1">
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Fast Vector Search</h3>
              <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Utilizing FAISS (Facebook AI Similarity Search) to retrieve the most relevant results from thousands of indexed ArXiv and OpenAlex embeddings in milliseconds.</p>
            </div>

            <div className="minimal-block fade-in-up delay-2">
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Transparent Explanations</h3>
              <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Integration of explainable AI methods (SHAP, Anchor-based rules) to help researchers understand exactly why certain papers are recommended, opening the black box to build institutional trust.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
