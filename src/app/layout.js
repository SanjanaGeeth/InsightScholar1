import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export const metadata = {
  title: 'InsightScholar | AI-Powered Academic Search',
  description: 'An intelligent academic search engine designed to help researchers discover relevant scientific papers faster and more accurately.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
