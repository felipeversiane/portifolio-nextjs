import React, { ReactNode } from 'react'
import Head from 'next/head'
import {Header} from '@/components/common/header/Header'
import {Footer} from '@/components/common/footer/Footer'


type Props = {
  children?: ReactNode
  title?: string
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
    </Head>

    <Header/>
    {children}
    {/* <Footer/> */}
  </>
);
};
