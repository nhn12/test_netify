import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, List, ListItem, ListItemText, CardActions, } from '@material-ui/core';
import ReactLazyCardMedia from '../shares/react_lazy_card';

const HomeServices = (props) => {

  const [data, ] = useState(props.data[props.locale]);

  return (
    <section className="home-products-services" id="home-products-services">
      <Typography variant="h2" component="h2" className="heading">{data.title}</Typography>
      <Container className="home-services">
        <Grid container spacing={5} >
          {
            data.services.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={4}>
                  <Card data-wow-delay={`${(index+1)*300}ms`} className="wow animate__slideInUp home-services__item">
                    <CardHeader className="item-header" avatar={<i className={item.icon.icon} style={{color: item.icon.color, backgroundColor: item.icon.background}}></i>} title={item.heading}></CardHeader>
                    <CardContent>
                      <List>
                        {
                          item.body.list.map((listItem, j) => {
                            return (
                              <ListItem key={j}>
                                <ListItemText>{listItem}</ListItemText>
                              </ListItem>
                            )   
                          })
                        }
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
      <Container className="home-products">
        {
          data.products.map((item, index) => {
            return (
              <Grid container key={index} className="home-products__item">
                <Grid item xs={12} sm={6}>
                  <ReactLazyCardMedia image={item.image} className="wow animate__flipInX"></ReactLazyCardMedia>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className="home-products__content">
                    <CardHeader className="item-header" title={item.title}></CardHeader>
                    <CardContent>
                      {
                        item.body.map((listItem, j) => {
                          return (
                            <Typography key={j}>{listItem}</Typography>
                          )   
                        })
                      }
                    </CardContent>
                    <CardActions>
                      <a href={item.more.link} title={item.more.text} target={item.more.target ? item.more.target : '_self'}>{item.more.text}</a>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            )
          })
        }
      </Container>
    </section>
  )
}

export default HomeServices;