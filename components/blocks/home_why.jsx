import React, { useState } from 'react';
import { Container, Typography, Grid, List, ListItem } from '@material-ui/core';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';

import ReactLazyCardMedia from '../shares/react_lazy_card';

const HomeWhy = (props) => {

  const [data, ] = useState(props.data[props.locale]);

  return (
    <section className="home-why" id="why-us">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography component="h2" variant="h2" className="heading">{data.title}</Typography>
            <Typography variant="body1" className="desc">{data.body.desc}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="wow animate__bounceInUp home-why__img"><ReactLazyCardMedia image={data.image}></ReactLazyCardMedia></div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="home-why__content">
              <List>
                {
                  data.body.list.map((item, index) => {
                    return (
                      <ListItem key={index} data-wow-delay="300ms" className="wow animate__fadeInRight">
                        <FilterVintageIcon color="primary"></FilterVintageIcon>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    )
                  })
                }
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HomeWhy;