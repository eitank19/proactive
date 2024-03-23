import { Rubik } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { useClient } from 'next/client'; // Import useClient

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'ProActive | חדר הכושר של דרום הרמה',
  description:
    'שמעתם נכון, אפילו ברמת הגולן הפריפאיטלית אפשר להתאמן כמו שצריך - עם מאמנים מקצועיים, מכשירים מכל הסוגים, מגוון חוגים ועוד מלא הפתעות',
};

export default function RootLayout({ children }) {
  useClient(); // Mark the component as a client-side component

  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
