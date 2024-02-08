import '../../styles/globals.css';
import type { Metadata } from 'next';
import { i18n } from '@/config/i18n.config';
import { Header } from '@/components/common/header/Header';
import { Footer } from '@/components/common/footer/Footer';
import '../../styles/globals.css'
import '../../styles/index.css'



export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata: Metadata = {
  title: 'Felipe Versiane',
  description: 'Portifolio',
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}