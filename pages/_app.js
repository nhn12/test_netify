import React from "react";
import PropTypes from "prop-types";
import App from "next/app";

import { globalSetting } from "../services/site";
import { menus } from "../services/menus.data";

import "../styles/assets/scss/_app.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

  }, []);

  return (
    <Component {...pageProps} />
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const pageProps = appProps.pageProps;
  const _menus = menus;

  appProps.pageProps = {
    ...pageProps,
    ...{ menu: _menus },
    ...{ site: globalSetting},
  };

  return { ...appProps };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
