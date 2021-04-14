import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Router from "next/router";
import Link from "next/link";

import { AppBar, Button, ClickAwayListener, Grow, Paper, Popper, Container, Select, Toolbar, MenuItem, } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import EmailOutlineIcon from "@material-ui/icons/EmailOutlined";

import { globalSetting } from "../../services/site";
import Menu from "./menu";

const Header = (props) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 320,
    height: 480
  });
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setMenuOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab" && dimensions.width < 992) {
      event.preventDefault();
      setMenuOpen(false);
    }
  }

  const handleChangeLocale = (event) => {
    Router.push(`/${event.target.value}`);
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(menuOpen);
  useEffect(() => {
    if (prevOpen.current === true && menuOpen === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
    
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);    
  }, []);

  return (
    <AppBar id="header" color="inherit" position="fixed" className={clsx("header", props.fixed ? "sticky" : "")}>
      <div className="header-top">
        <Container>
          <Toolbar variant="dense">
            <a className="top-email" href="mailto:contact@emlotech.com" title="contact@emlotech.com"><EmailOutlineIcon color="primary"/>contact@emlotech.com</a>
            <Select
              value={props.locale}
              onChange={handleChangeLocale}
              fontSize="small"
              className="select-language"
              MenuProps={
                {
                  classes: {
                    paper: 'select-language__menu'
                  }
                }
              }
            >
              {
                globalSetting.languages.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.slug}>
                      <span className={clsx("flag-icon", item.flag)}></span>
                      {item.title}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </Toolbar>
        </Container>
      </div>
      <div className="header-bottom">
        <Container>
          <a title="Emlo Technologies" className="logo" href="https://www.emlotech.com/">
            <img src="/images/logo.png" alt="Emlo Technologies logo" />
          </a>
          <Button
            ref={anchorRef}
            aria-controls={menuOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className="header-menu__button"
            color="primary"
          >
            {!menuOpen ? <MenuIcon fontSize="large" /> : <MenuOpenIcon fontSize="large" />}
          </Button>
          <Popper
            open={menuOpen}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{zIndex: 100}}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper className="header-menu">
                  <ClickAwayListener onClickAway={handleClose}>
                    <Menu locale={props.locale} data={props.menu} className="main-navigation" handleListKeyDown={handleListKeyDown} handleClose={handleClose} open={menuOpen}
                    />
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          {
            dimensions.width > 767 && <nav className="header-menu"><Menu locale={props.locale} data={props.menu} className="main-navigation" handleListKeyDown={handleListKeyDown} open={true}/></nav>
          }
        </Container>
      </div>      
    </AppBar>
  );
};

export default Header;
