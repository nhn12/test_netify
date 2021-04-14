import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
// import { globalSetting } from "../services/site";


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {

    return (
      <Html>
        <Head>
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager" />
          <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,700,700i,900&display=swap&subset=vietnamese" as="style" />
          <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" as="style" />
          <link rel="preload" href="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js" as="script" />
          <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/fav/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
          <link rel="manifest" href="/fav/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
          <meta name="theme-color" content="#0688c0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
          {/* {process.env.NODE_ENV === 'production' && <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","${globalSetting.gtm}");`}}></script>} */}
        </Head>
        <body>
          {/* {process.env.NODE_ENV === 'production' && <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${this.props.globalSetting.gtm}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>} */}
          <Main />
          <script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js" async></script>
          <NextScript />          
        </body>
      </Html>
    );
  }
}
