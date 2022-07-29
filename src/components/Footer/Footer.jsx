import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>
          All Right Reserved &copy;
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer