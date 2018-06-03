import React from 'react';
import { object } from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import * as style from './layout.scss';
import './reset.scss';

const Layout = ({ children }) => (
  <div className={style.layout}>
    <Header
      title='BROCCOLI & CO'
    />
    {
                children
    }
    <Footer
      content='Made with ♥ in Melbourne.'
      description='@ 2016 Broccoli & Co. All rights reserved.'
    />
  </div>
);

Layout.propTypes = {
  children: object.isRequired
};

export default Layout;
