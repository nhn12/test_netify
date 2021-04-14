import React from 'react';
import Link from 'next/link';
import clsx from "clsx";

import {
  MenuList,
  MenuItem,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Menu = React.forwardRef((props, ref) => {
  
  // const [menus, setMenus] = useState(props.data);

  // useEffect(() => {
  //   const _menus = [];
  //   props.data.map((item) => {
  //     item.expand = false;
  //     _menus.push(item);
  //   });
  //   console.log(_menus);
  //   setMenus(_menus);
  // }, [])

  const prefetchLink = (url) => {
    if (url === '/lien-he') {
      return '/contact-us';
    } else if (url === '/trang-chu' || url === '' || url === '/') {
      return '/index';
    } else if (url === '/san-pham-dich-vu') {
      return '/products-services';
    } else {
      return url;
    }
  }

  // const toogleMenu = (event) => (menu) => {
  //   menu.expand = !menu.expand;
  //   // setMenus()
  // }

  const renderMenu = (menu) => {
    return (
      <MenuList className="sub-menu">
        {
          menu.sub.map((item, index) => {
            return (
              <MenuItem key={index} className={clsx(`/${props.locale}${item.link}/` === window.location.pathname ? "active" : "", item.sub && 'has-sub', item.expand && 'expanded')}>
                {
                  item.root ? (
                    <a href={item.link} title={item.title} className={item.type ? item.type : ''} target={item.target ? item.target : '_self'}>{item.title}</a>
                  ) : (
                    <Link as={`/${props.locale}${item.link}`} href={`/${props.locale}${prefetchLink(item.link)}`}>
                      <a title={item.title} className={item.type ? item.type : ''} target={item.target ? item.target : '_self'}>{item.title}</a>
                    </Link>
                  )
                }
                {
                  item.sub ? (
                    <ExpandMoreIcon fontSize="large" color="primary"/>
                  ) : ''
                }
                {
                  item.sub ? renderMenu(item) : ''
                }
              </MenuItem>
            )
          })
        }
      </MenuList>
    )
  }

  return (
    <React.Fragment>
      <MenuList
        autoFocusItem={props.open}
        id="menu-list-grow"
        onKeyDown={props.handleListKeyDown}
        className={props.className}
        ref={ref}
      >
        {
          props.data.map((item, index) => {
            return (
              <MenuItem key={index} className={clsx(`/${props.locale}${item.link}/` === window.location.pathname ? "active" : "", item.sub && 'has-sub', item.expand && 'expanded')}>
                {
                  item.root ? (
                    <a href={item.link} title={item.title} className={item.type ? item.type : ''}  target={item.target ? item.target : '_self'}>{item.title}</a>
                  ) : (
                    <Link as={`/${props.locale}${item.link}`} href={`/${props.locale}${prefetchLink(item.link)}`}>
                      <a title={item.title} className={item.type ? item.type : ''}  target={item.target ? item.target : '_self'}>{item.title}</a>
                    </Link>
                  )
                }
                {
                  item.sub ? (
                    <ExpandMoreIcon fontSize="large" color="primary"/>
                  ) : ''
                }
                {
                  item.sub ? renderMenu(item) : ''
                }
              </MenuItem>
            )
          })
        }
      </MenuList>      
    </React.Fragment>
  )
})

Menu.displayName = 'EMLOMenu';

export default Menu;