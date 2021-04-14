import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/global/layout';
import HomeHero from '../../components/blocks/home_hero';
import HomeAbout from '../../components/blocks/home_about';
import HomeServices from '../../components/blocks/home_services';
import HomeWhy from '../../components/blocks/home_why';
import HomeContact from '../../components/blocks/home_contact';
import HomeContactForm from '../../components/blocks/home_contact_form';

import { homepage } from '../../services/pages/index.data';
import { fixLocaleRouter } from '../../services/utils';

const HomeEN = (props) => {

  const router = useRouter();
  const lang = fixLocaleRouter(router.query.lang);

  let meta = props.data.metadata[lang].meta;

  let og = props.data.metadata[lang].og;


  useEffect(() => {

    const wow = new window.WOW({
      animateClass: 'animate__animated',
      offset: 100,
    });

    window.addEventListener("load", () => {
      wow.init();
    }); 

  }, []);

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
    <Layout head={head} menu={props.menu} locale={lang}>
      <main id="main" className="home__page">
        {
          <h1 className="invisible invisible-title">Software & Solutions for Every Business - Emlo Technologies</h1>
        }
        <HomeHero locale={lang} data={props.data.hero.data} fade={true} arrows={false}></HomeHero>
        <HomeAbout locale={lang} data={props.data.about.data} ></HomeAbout>
        <HomeWhy locale={lang} data={props.data.why.data} ></HomeWhy>
        <HomeContact locale={lang} data={props.data.contact.data} ></HomeContact>
        <HomeServices locale={lang} data={props.data.services.data} ></HomeServices>
        <HomeContactForm locale={lang} data={props.data.form.data} ></HomeContactForm>
      </main>
    </Layout>
  )
}

HomeEN.getInitialProps = async () => {
  
  let data = homepage;

  return {
    data
  }
};


export default HomeEN
