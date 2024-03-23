import { useEffect } from 'react';
import { Rubik } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'ProActive | חדר הכושר של דרום הרמה',
  description:
    'שמעתם נכון, אפילו ברמת הגולן הפריפאיטלית אפשר להתאמן כמו שצריך - עם מאמנים מקצועיים, מכשירים מכל הסוגים, מגוון חוגים ועוד מלא הפתעות',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically load the script asynchronously
    const script = document.createElement('script');
    script.src = 'https://cdn.enable.co.il/licenses/enable-L2521757f2doiqut-0324-57225/init.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
