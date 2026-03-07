export const metadata = {
    title: 'Key Features | InsightScholar',
    description: 'Explore the semantic search, FAISS indexing, hybrid ranking, and explainable AI capabilities of InsightScholar.',
};

export default function Features() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="mb-8 fade-in-up" style={{ marginBottom: '6rem' }}>
                        <h1 className="brand-font" style={{ fontSize: 'clamp(50px, 8vw, 90px)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                            The <br /><span style={{ color: 'var(--text-muted)' }}>Architecture.</span>
                        </h1>
                        <p className="mt-4" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '500px', marginTop: '2rem' }}>
                            Advanced machine learning transforms how you discover academic literature through five core pillars.
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="minimal-block fade-in-up delay-1">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>01</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Semantic Search with SPECTER2</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.8' }}>
                                InsightScholar uses the SPECTER2 transformer model developed by the Allen Institute for AI. The model is trained on millions of scientific papers and produces 768-dimensional embeddings representing the exact meaning of research content. Understand research concepts, capture relationships between scientific topics, and significantly improve relevance compared to traditional keyword search.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-2">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>02</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Fast Vector Search with FAISS</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.8' }}>
                                All research paper embeddings are stored in a FAISS vector index. FAISS enables extremely fast similarity search across massive datasets. Capabilities include fast nearest-neighbor search, efficient retrieval, and scalable indexing across thousands of papers instantly.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-1">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>03</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Concept-Based Discovery</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.8' }}>
                                Unlike traditional search engines, InsightScholar finds papers conceptually related to the user&apos;s research question. Discover relevant work across disciplines, even when the underlying terminology varies completely.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-2">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>04</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Hybrid Ranking System</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.8' }}>
                                After retrieving candidate papers using vector similarity search, InsightScholar applies a hybrid ranking algorithm. This ensures the most useful results by factoring in semantic similarity, research category alignment, citation impact score, and publication recency simultaneously.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-1" style={{ borderBottom: 'none' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>05</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Explainable Recommendations</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.8', marginBottom: '2rem' }}>
                                InsightScholar integrates explainable AI methods to help researchers understand why certain papers are recommended, supporting transparent discovery.
                            </p>

                            <div style={{ paddingLeft: '2rem', borderLeft: '1px solid var(--text-muted)' }}>
                                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '400' }}>SHAP Feature Importance</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Exposes which exact features contributed most to the final ranking decision.</p>

                                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '400' }}>Anchor-Based Explanations</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Provides clean, rule-based reasoning behind complex statistical recommendations.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
