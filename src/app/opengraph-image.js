import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'InsightScholar Open Graph Image'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 160,
                    background: '#0a0a0c',
                    color: '#f0f0f0',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '20px solid #1a1a1c',
                }}
            >
                <div style={{ fontFamily: 'serif', fontStyle: 'italic', marginBottom: '20px' }}>
                    Is.
                </div>
                <div style={{ fontSize: 60, fontWeight: 300, color: '#888888', letterSpacing: '-0.02em', marginTop: '20px' }}>
                    InsightScholar
                </div>
                <div style={{ fontSize: 32, fontWeight: 300, color: '#4a6fa5', letterSpacing: '0.05em', marginTop: '20px', textTransform: 'uppercase' }}>
                    AI-Powered Academic Search
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can set the size here too
            ...size,
        }
    )
}
