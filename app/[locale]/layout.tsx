import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/common/header/desktop/Header';
import { Footer } from '@/components/common/footer/Footer';
import '../../styles/globals.css'
import '../../styles/index.css'
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata: Metadata = {
  title: 'Felipe Versiane',
  description: 'Full Stack Developer',
};

const locales = ['pt-BR', 'en-US'];
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

type Props = {
  children:React.ReactNode;
  params:{
    locale: 'en-US' | 'pt-BR';  
  }
}

const RootLayout:React.FC<Props> =({
  children,
  params: {locale}
}) => {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/logo-small.svg" />
      </head>
      <body >
        <NextIntlClientProvider messages={messages}>
          <Header/>
            {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;