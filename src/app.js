import React from 'react';
import { object } from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Layout } from '../src/component';

const App = ({ route }) => (
  <Layout>
    {renderRoutes(route.routes)}
  </Layout>
);


App.propTypes = {
  route: object.isRequired
};

export default App;
