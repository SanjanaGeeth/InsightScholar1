import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 512,
    height: 512,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 320,
                    background: '#0a0a0c', // Dark polar night background
                    color: '#f0f0f0',      // Stark white text
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'serif',   // Standard fallback for Playfair Display
                    fontStyle: 'italic',
                }}
            >
                Is.
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can set the size here too
            ...size,
        }
    )
}
