import { Rubik } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import GoogleTagManager from '@magicul/next-google-tag-manager';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'ProActive | חדר הכושר של דרום הרמה',
  description:
    'שמעתם נכון, אפילו ברמת הגולן הפריפאיטלית אפשר להתאמן כמו שצריך - עם מאמנים מקצועיים, מכשירים מכל הסוגים, מגוון חוגים ועוד מלא הפתעות',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>
      <GoogleTagManager id="GTM-NQXDVMKB" />
        <Header />
        {children}
      </body>
    </html>
  );
}