import React, { useEffect, useState } from "react";
// import Router from "next/router";
import { ThemeProvider  } from "@material-ui/core/styles";

import { fixLocaleRouter } from "../../services/utils";

import theme from "./theme";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  const [locale, ] = useState(fixLocaleRouter(props.locale));
  const [fixed, setFixed] = useState(false);
  
  useEffect(() => {

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
      js.onload = function() {
        window.WebFont.load({
          'google': {
            families: ['Montserrat:300,300i,400,400i,500,500i,700,700i,900&vietnamese&display=swap']
          }
        });
      }
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "webfont");

    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

  }, []);

  const childWithProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      locale: props.locale,
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {props["head"]}
        <Header menu={props.menu[locale]} locale={locale} fixed={fixed}/>
        {childWithProp}
        <Footer locale={locale} backToTop={fixed}/>
      </React.Fragment>
    </ThemeProvider>
  );

}

export default Layout;
