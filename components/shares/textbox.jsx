import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
  cssLabel: {
    color: `${theme.palette.grey[500]}`,
    fontSize: '1.2rem',
    "&.MuiFormLabel-root.Mui-disabled": {
      color: `${theme.palette.grey[300]}`,
    },
    "@media (min-width:992px)": {
      fontSize: '1.6rem',
    }
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
    "&$cssFocused svg": {
      color: `${theme.palette.primary.main}`
    },
    '& svg': {
      color: `${theme.palette.grey.A700}`,
      width: 14,
      height: 14
    },
    "@media (min-width:992px)": {
      fontSize: '1.6rem',
      '& svg': {
        width: 20,
        height: 20
      },
    },
  },

  cssInput: {
    color: `${theme.palette.grey.A700}`,
    padding: theme.spacing(1.2, 1),
    fontSize: '1.6rem',
    height: 'auto',
    "&:-webkit-autofill": {
      '-webkit-text-fill-color': `${theme.palette.grey.A700}`,
      '-webkit-box-shadow': 'none',
      boxShadow: 'none',
    },
    "@media (min-width:992px)": {
      padding: theme.spacing(1.5, 2),
    }
  },

  cssError: {
    "&$cssFocused $notchedOutline, & $notchedOutline": {
      borderColor: `${theme.palette.error.main} !important`,
    },
    "& $cssInput": {
      color: `${theme.palette.error.main}`
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: `${theme.palette.border.main} !important`,
    borderRadius: 0,
    "@media (min-width:992px)": {
      borderWidth: "2px",
    },
  },
}));

const BaeminTextBox = (props) => {
  const classes = useStyles();
  const { InputProps, ...other } = props;
  const iprops = Object.assign(
    {
      classes: Object.assign({
        root: classes.cssOutlinedInput,
        focused: classes.cssFocused,
        notchedOutline: classes.notchedOutline,
        input: classes.cssInput,
        error: classes.cssError
      }),
    },
    InputProps
  );

  return (
    <TextField
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={iprops}
      {...other}
    />
  );
};

export default BaeminTextBox;
