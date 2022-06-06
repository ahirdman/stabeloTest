import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Header from './application/components/header/Header';
import About from './application/pages/about/AboutPage';
import Implementation from './application/pages/implementation/ImplementationPage';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <>
      <Header />
      <main>
        <Route exact={true} path="/" render={() => <Redirect to="/about" />} />
        <Route path="/about" component={About} />
        <Route path="/implementation" component={Implementation} />
      </main>
    </>
  </BrowserRouter>,
  document.getElementById('app')
);
