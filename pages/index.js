import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from "next/router";

import Layout from '../components/global/layout';
import { fixLocaleRouter } from '../services/utils';

const Home = (props) => {
  const [locale, setLocale] = useState('en');

  let meta = {
    title: 'Emlo Technologies',
    description: 'Emlo Technologies',
    keyword: 'Emlo Technologies',
  };

  let og = {
    url: "",
    title: "",
    type: "website",
    description: "",
    image: "",
  };

  useEffect(() => {
    let _l = location.pathname.split('/')[1];
    const lang = fixLocaleRouter(_l);
    setLocale(lang);
  }, []);

  useEffect(() => {
    Router.push(`/${locale}`);
  }, [locale]);

  const head = (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description}/>
      <meta name="keywords" content={meta.keyword}/>
      <meta property="og:url" content={`https://${og.url}`}/>
      <meta property="og:title" content={og.title}/>
      <meta property="og:type" content={og.type}/>
      <meta property="og:description" content={og.description}/>
      <meta property="og:image" content={og.image}/>
      <link rel="canonical" href="https://emlotech.com/" />
    </Head>
  );

  return (
    <Layout head={head} footer={props.footer} menu={props.menu}>
      <main id="main" className="home__page">
        {
          <h1 className="invisible invisible-title">Software & Solutions for Every Business - Emlo Technologies</h1>
        }
      </main>
    </Layout>
  )
}

export default Home
