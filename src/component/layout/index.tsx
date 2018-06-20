import * as React from 'react';
import Header from '../header';
import Footer from '../footer';

require('./reset.scss');
const style = require('./layout.scss');

export interface Props {
  children: any
}

const Layout = ({ children } : Props) => (
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

export default Layout;
