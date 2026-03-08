import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Script from 'next/script';

export const metadata = {
  title: 'InsightScholar | AI-Powered Academic Search',
  description: 'An intelligent academic search engine designed to help researchers discover relevant scientific papers faster and more accurately.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WH34PJ26QD" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WH34PJ26QD');
          `}
        </Script>
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
