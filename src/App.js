import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import ComposerChoices from './components/ComposerChoices';
import StorePage from './components/StorePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Route path="/composers" component={ComposerChoices} />
        <Route path="/store" component={StorePage} />
      </div>
    </Router>
  );
}
