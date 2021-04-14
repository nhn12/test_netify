import React, { useState, } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, } from '@material-ui/core';

import ReactLazyCardMedia from '../../components/shares/react_lazy_card';

const HomeHero = (props) => {
  
  const [data, ] = useState(props.data[props.locale]);

  return (
    <section className="home-hero">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Card className="home-hero__content">
              <CardContent>
                <Typography variant="h1" component="h2" className="heading" dangerouslySetInnerHTML={{__html: data.title}}></Typography>
                <Typography variant="h4" component="h3" className="sub-heading">{data.sub}</Typography>
              </CardContent>
              <CardActions>
                <Button color="primary" variant="contained" href={data.cta.link}>{data.cta.text}</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ReactLazyCardMedia data-wow-delay="300ms" className="wow animate__bounceInRight home-hero__image" image={data.image}></ReactLazyCardMedia>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HomeHero;