export const metadata = {
    title: 'About | InsightScholar',
    description: 'About InsightScholar, the technology stack, and future improvements.',
};

export default function About() {
    return (
        <main>
            <section className="section pt-hero">
                <div className="container" style={{ maxWidth: '100%' }}>

                    <div className="fade-in-up">
                        <h3 style={{ marginBottom: '1rem' }}>The Mission</h3>
                        <h1 className="brand-font" style={{ marginBottom: '3rem', fontSize: 'clamp(32px, 5vw, 50px)' }}>
                            Transforming how researchers explore academic literature through conceptual depth.
                        </h1>
                    </div>

                    <div className="image-reveal fade-in-up delay-1" style={{ width: '100%', height: '400px', position: 'relative', marginBottom: '4rem' }}>
                        <img
                            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
                            alt="Moody dark library aisles"
                            className="scale-on-hover"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) brightness(0.7)' }}
                        />
                    </div>

                    <div className="fade-in-up delay-2" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            InsightScholar leverages hybrid transformer-based models trained on massive academic corpora like ArXiv and OpenAlex. The system resolves information overload by converting textual abstracts into high-dimensional semantic embeddings.
                        </p>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Combined with a rigorous Tag-Filtering mechanism, these embeddings enable researchers to discover orthogonal topics mathematically. To build academic trust, everything is backed by Explainable AI strategies (like SHAP and Anchors) to ensure the logic remains completely transparent.
                        </p>
                    </div>

                    <div className="fade-in-up delay-2" style={{ marginTop: '4rem' }}>
                        <h3 style={{ marginBottom: '3rem' }}>The Engine</h3>

                        <div className="grid-2">
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Machine Learning</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            <img src="https://cdn.simpleicons.org/pytorch/888888" alt="PyTorch" style={{ width: '24px', height: '24px' }} />
                                            <img src="https://cdn.simpleicons.org/tensorflow/888888" alt="TensorFlow" style={{ width: '24px', height: '24px' }} />
                                        </div>
                                        PyTorch & TensorFlow
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/huggingface/888888" alt="HuggingFace" style={{ width: '24px', height: '24px' }} />
                                        SciBERT & SPECTER Embeddings
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/scikitlearn/888888" alt="Scikit-Learn" style={{ width: '24px', height: '24px' }} />
                                        K-Means Clustering Analysis
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Search Infrastructure</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/meta/888888" alt="FAISS" style={{ width: '24px', height: '24px' }} />
                                        FAISS Vector Index
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                        Hybrid Tag Retrieval
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Data & Backend</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            <img src="https://cdn.simpleicons.org/python/888888" alt="Python" style={{ width: '24px', height: '24px' }} />
                                            <img src="https://cdn.simpleicons.org/fastapi/888888" alt="FastAPI" style={{ width: '24px', height: '24px' }} />
                                        </div>
                                        Python / FastAPI
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/postgresql/888888" alt="PostgreSQL" style={{ width: '24px', height: '24px' }} />
                                        PostgreSQL Database
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                        S2ORC & OpenAlex Corpi
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Explainable AI</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                        SHAP Feature Importance
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
                                        Anchor-Based Logic
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* System Architecture Section Merged from How It Works */}
                    <div className="fade-in-up delay-3" style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="mb-8 md-text-center">
                            <h3 style={{ marginBottom: '1rem', letterSpacing: '0.1em' }}>System Architecture</h3>
                            <h2 className="brand-font" style={{ marginBottom: '2rem' }}>How InsightScholar Works</h2>
                            <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
                                A transparent, end-to-end framework turning massive open-access datasets into explainable, highly-relevant research recommendations.
                            </p>
                        </div>

                        <div className="mt-8" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {/* Step 1 */}
                            <div className="minimal-block grid-2" style={{ alignItems: 'center' }}>
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
                            <div className="minimal-block grid-2" style={{ alignItems: 'center' }}>
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
                            <div className="minimal-block grid-2" style={{ alignItems: 'center' }}>
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
                            <div className="minimal-block grid-2" style={{ alignItems: 'center' }}>
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
                            <div className="minimal-block grid-2" style={{ alignItems: 'center' }}>
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

                    <div className="fade-in-up" style={{ marginTop: '6rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Looking Forward</h3>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>We are continually expanding the horizon. Future iterations of InsightScholar will introduce:</p>
                        <ul style={{ listStyleType: 'none', paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }} className="text-secondary">
                            <li style={{ marginBottom: '1rem' }}>&mdash; Massive scale academic datasets</li>
                            <li style={{ marginBottom: '1rem' }}>&mdash; Hyper-personalized research workflows</li>
                            <li style={{ marginBottom: '1rem' }}>&mdash; Deep citation graph analysis</li>
                            <li style={{ marginBottom: '1rem' }}>&mdash; External academic database integration</li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}

