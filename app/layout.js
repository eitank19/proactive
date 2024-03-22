import { Rubik } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'ProActive',
  description:
    'Elevate your fitness journey with Pro Active - where every workout becomes a step towards your best self. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
