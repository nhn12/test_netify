import React, { useState } from 'react';
import { Container, Grid, Typography, Button, } from '@material-ui/core';

const HomeContact = (props) => {

  const [data, ] = useState(props.data[props.locale]);

  return (
    <section className="home-contact">
      <Container>
        <Grid container className="home-contact__content" alignItems="flex-start">
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" className="heading">{props.data[props.locale].title}</Typography>
            <Typography variant="body1" className="desc">{data.desc}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" color="default" href={data.body.cta.link}>{data.body.cta.text}</Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HomeContact;