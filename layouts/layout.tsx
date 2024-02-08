import React, { ReactNode } from 'react'
import Head from 'next/head'
import {Header} from '@/components/common/header/Header'
import {Footer} from '@/components/common/footer/Footer'
import { i18n } from '@/config/i18n.config';


type Props = {
  children?: ReactNode,
  title?: string,
}

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export default function Layout({ children, title = 'Title' }: Props){
  return (
  <>
    <Head >
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/icons/logo-small-black.svg" type='image/x-icon' />
    </Head>
    <Header/>
    {children}
    <Footer/>
  </>
);
};
