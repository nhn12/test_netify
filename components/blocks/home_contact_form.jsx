import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Typography, Grid, List, ListItem, TextField, FormGroup, Button, } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import envConfig from "../../env.config";

const HomeContactForm = (props) => {

  const [data, ] = useState(props.data[props.locale]);
  const [init, setInit] = useState(true);
  const [contactData, setContactData] = useState({
    name: {
      value: "",
      error: false
    },
    email: {
      value: "",
      error: false
    },
    subject: {
      value: "",
      error: false
    },
    message: {
      value: "",
      error: false
    }
  });

  useEffect(() => {
    
  }, [])

  const handleValidate = (e) => {
    e.preventDefault();

    setContactData({...contactData, [e.target.id]: {
      value: e.target.value,
      error: e.target.value.trim() === ""
    }});
  }

  const handleInput = (e) => {
    e.preventDefault();
    setInit(false);

    handleValidate(e);
  }

  const handleContact = (e) => {
    e.preventDefault();

    if (init) {
      const _contactData = JSON.parse(JSON.stringify(contactData));

      _contactData.name.error = _contactData.name.value === "";
      _contactData.email.error = _contactData.email.value === "";
      _contactData.subject.error = _contactData.subject.value === "";
      _contactData.message.error = _contactData.message.value === "";
      setContactData(_contactData);
      setInit(false);

      return false;
    }

    if (contactData.name.error || contactData.email.error || contactData.subject.error || contactData.message.error
      || contactData.name.value === "" || contactData.email.value === "" || contactData.subject.value === "" || contactData.message.value === "") {
      return false;
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: contactData.name.value,
          email: contactData.email.value,
          subject: contactData.subject.value,
          message: contactData.message.value
        })
      };
      fetch(envConfig.MCAPIUrl + '/api/possystem/contactus', requestOptions)
          .then(async response => {
            const _contactData = JSON.parse(JSON.stringify(contactData));
      
            _contactData.name.value = "";
            _contactData.email.value = "";
            _contactData.subject.value = "";
            _contactData.message.value = "";
            setContactData(_contactData);
            setInit(true);

            toast.success('Message successfully sent.')
          })
          .catch(error => {
            toast.error('There was an error!')
          });
    }
  }

  return (
    <section className="home-form-contact" id="contact-us">
      <Container>
        <Grid container alignItems="flex-start">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h2" component="h2" className="heading">{data.title}</Typography>
            <Typography className="desc">{data.sub}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" component="h4" className="sub-heading">{data.links.title}</Typography>
            <List>
              {
                data.links.list.map((item, index) => {
                  return item.root ? (
                    <ListItem key={index}>
                      <a href={item.link} title={item.text}>{item.text}</a>
                    </ListItem>
                  ) : (
                    <ListItem key={index}>
                      <Link href={`/${props.locale}${item.link}`}>
                        <a title={item.title} target={item.target ? item.target : '_self'}>{item.text}</a>
                      </Link>
                    </ListItem>
                  )
                })
              }
            </List>
            <Typography variant="h4" component="h4" className="sub-heading">{data.block.title}</Typography>
            {
              data.block.content.map((item, index) => {
                return (
                  <Typography key={index} dangerouslySetInnerHTML={{__html:item}}></Typography>
                )
              })
            }
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" component="h4" className="sub-heading">{data.form.title}</Typography>
            <Typography className="desc">{data.form.sub}</Typography>
            <form noValidate autoComplete="off" id="contact-form">
              <TextField fullWidth size="small" variant="outlined" placeholder={data.form.controls[0].label} value={contactData.name.value} error={contactData.name.error} helperText={data.form.controls[0].error} onChange={handleInput} id="name"></TextField>
              <TextField fullWidth size="small" variant="outlined" placeholder={data.form.controls[1].label} value={contactData.email.value} error={contactData.email.error} helperText={data.form.controls[1].error} onChange={handleInput} id="email"></TextField>
              <TextField fullWidth size="small" variant="outlined" placeholder={data.form.controls[2].label} value={contactData.subject.value} error={contactData.subject.error} helperText={data.form.controls[2].error} onChange={handleInput} id="subject"></TextField>
              <TextField multiline rows={5} fullWidth size="small" variant="outlined" placeholder={data.form.controls[3].label} value={contactData.message.value} error={contactData.message.error} helperText={data.form.controls[3].error} onChange={handleInput} id="message"></TextField>
              <FormGroup>
                <Button color="primary" variant="contained" onClick={handleContact} href={data.form.submit.link}>{data.form.submit.label}</Button>
                <ToastContainer style={{ fontSize: '16px' }} />
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HomeContactForm;