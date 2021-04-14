import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SwipeableViews from 'react-swipeable-views';

import ReactLazyCardMedia from '../../components/shares/react_lazy_card';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`circle-tabpanel-${index}`}
      aria-labelledby={`circle-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `circle-tab-${index}`,
    'aria-controls': `circle-tabpanel-${index}`,
  };
}

const EMLOTab = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} className="emlo-tabs" {...props}>
        {
          props.items.map((item, index) => {
            return (
              <Tab className="emlo-tab-button" label={item.tab} {...a11yProps(index)} key={index} icon={item.icon ? (<ReactLazyCardMedia image={item.icon}></ReactLazyCardMedia>) : ''} />
            )
          })
        }
      </Tabs>
      {
        props.swipeable ? (
          <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {
              props.items.map((item, index) => {
                return (
                  <TabPanel className={clsx("emlo-tab-panel", item.class)} value={value} index={index} key={index}>
                    {
                      item.childrens
                    }
                  </TabPanel>
                )
              })
            }
          </SwipeableViews>
        ) : (
          props.items.map((item, index) => {
            return (
              <TabPanel className={clsx("emlo-tab-panel", item.class)} value={value} index={index} key={index}>
                {
                  item.childrens
                }
              </TabPanel>
            )
          })
        )
      }
    </React.Fragment>
  )
};

export default EMLOTab;
