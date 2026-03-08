export const metadata = {
    title: 'How It Works | InsightScholar',
    description: 'The step-by-step pipeline of InsightScholar: combining NLP, transformer models, and vector similarity search.',
};

export default function HowItWorks() {
    return (
        <main>
            <section className="section pt-hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingBottom: '8rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="mb-8 fade-in-up md-text-center">
                        <h3 style={{ marginBottom: '1rem', letterSpacing: '0.1em' }}>System Architecture</h3>
                        <h1 className="brand-font" style={{ marginBottom: '2rem' }}>How InsightScholar Works.</h1>
                        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
                            A transparent, end-to-end framework turning massive open-access datasets into explainable, highly-relevant research recommendations.
                        </p>
                    </div>

                    <div className="mt-8" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {/* Step 1 */}
                        <div className="minimal-block fade-in-up delay-1 grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>01</span>
                                    Data Collection & Corpus
                                </h3>
                                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    InsightScholar connects to massive open-access repositories, including ArXiv, OpenAlex, S2ORC, and CORD 19. Hundreds of thousands of documents are indexed, pulling abstracts, titles, full texts, and comprehensive metadata into our secure database.
                                </p>
                            </div>
                            <div className="image-reveal" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="/images/corpus_library_1772989324880.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} alt="Data Collection Server Room" className="scale-on-hover" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="minimal-block fade-in-up delay-2 grid-2" style={{ alignItems: 'center' }}>
                            <div className="image-reveal md-order-2" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="/images/transformer_vectors_1772989361376.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} alt="Abstract Semantic Vectors" className="scale-on-hover" />
                            </div>
                            <div className="md-order-1">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>02</span>
                                    Transformer Vectorization
                                </h3>
                                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Textual data (titles, abstracts) is processed through specialized language models like SciBERT and SPECTER. The models generate 768-dimensional mathematical embeddings capturing the deep semantic meaning and context of the research.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="minimal-block fade-in-up delay-3 grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>03</span>
                                    Hybrid FAISS Retrieval
                                </h3>
                                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    A user query is vectorized and compared against the corpus using Facebook AI Similarity Search (FAISS) for millisecond retrieval.
                                    Crucially, this vector search is combined with a Tag and Metadata filtering module—blending semantic discovery with precise author, venue, and citation structural data.
                                </p>
                            </div>
                            <div className="image-reveal" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="/images/hybrid_retrieval_1772989398726.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} alt="Hardware Motherboard Retrieval" className="scale-on-hover" />
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="minimal-block fade-in-up delay-[4] grid-2" style={{ alignItems: 'center' }}>
                            <div className="image-reveal md-order-2" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="/images/explainable_ai_1772989432298.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} alt="Cyber Data Explanation" className="scale-on-hover" />
                            </div>
                            <div className="md-order-1">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>04</span>
                                    Explainable AI Layer (XAI)
                                </h3>
                                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Before results are displayed, the black box is opened. Methods like SHAP (Shapley Additive Explanations) and Anchor-based local rule framing evaluate the model's decision, generating verifiable reasoning for why the paper fits the user's criteria.
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="minimal-block fade-in-up delay-[5] grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>05</span>
                                    Metric Evaluation & UI
                                </h3>
                                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    The final sorted recommendations are presented to the user alongside visual XAI charts. Behind the scenes, the model is continuously benchmarked using strict quantitative metrics like Precision@K, Recall@K, and NDCG to ensure maximum accuracy.
                                </p>
                            </div>
                            <div className="image-reveal" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="/images/metric_ui_1772989466389.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} alt="Data Analytics Evaluation" className="scale-on-hover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
