import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className="bg-gray-100">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="container py-8">{children}</div>
    <footer>
      <hr />
      <span>I&apst;m here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
