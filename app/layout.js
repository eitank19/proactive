import { Rubik } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Header from './components/Header';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'ProActive | חדר הכושר של דרום הרמה',
  description:
    'שמעתם נכון, אפילו ברמת הגולן הפריפאיטלית אפשר להתאמן כמו שצריך - עם מאמנים מקצועיים, מכשירים מכל הסוגים, מגוון חוגים ועוד מלא הפתעות',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NQXDVMKB');
            `,
          }}
        />
      </Head>
      <html lang="he" dir="rtl">
        <body className={rubik.className}>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
