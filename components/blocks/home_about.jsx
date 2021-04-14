import React, { useState } from 'react';
import { Container, Typography, Grid, } from '@material-ui/core';

import ReactLazyCardMedia from '../../components/shares/react_lazy_card';

const HomeAbout = (props) => {

  const [data, ] = useState(props.data[props.locale]);

  return (
    <section className="home-about" id="about-us">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="wow animate__bounceInLeft home-about__img"><ReactLazyCardMedia image={data.image}></ReactLazyCardMedia></div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="home-about__content">
              <Typography component="h2" variant="h2" className="heading">{data.title}</Typography>
              <Typography component="h3" variant="h4" className="sub-heading">{data.sub}</Typography>
              <Typography variant="body1">{data.body}</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HomeAbout;