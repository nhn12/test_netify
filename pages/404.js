import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CircularProgress from '@material-ui/core/CircularProgress';

import Layout from '../components/global/layout';
import { fixLocaleRouter } from '../services/utils';

const Custom404 = (props) => {
  const router = useRouter();
  const lang = fixLocaleRouter(router.query.lang);

  useEffect(() => {
    
    router.push(lang);
  }, [])

  const head = (
    <Head>
      <link rel="canonical" href="https://emlotech.com/" />
    </Head>
  );

  return (
    <Layout head={head} menu={props.menu} locale={lang}>
      <main id="main" className="error__page">
        <CircularProgress color="primary" className="loading-error"/>
      </main>
    </Layout>    
  )
}

export default Custom404;