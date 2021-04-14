import React, { useState } from "react";
import clsx from "clsx";
import { Grid, Typography, Container, IconButton, } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { footerData } from '../../services/footer.data';

const Footer = (props) => {
  
  const [data, ] = useState(footerData[props.locale]);

  const goTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer id="footer" className="footer">
      <Container>
        <Grid container alignItems="center" justify="center" direction="column">
          <Typography variant="body1"><span dangerouslySetInnerHTML={{__html: data.body}}></span></Typography>
        </Grid>
      </Container>
      <IconButton onClick={goTop} size="medium" className={clsx("go-top", props.backToTop ? "active" : "")}>
        <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
      </IconButton>
    </footer>
  );
}

export default Footer;
