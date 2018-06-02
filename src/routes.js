/**
 * ------------------------------------------------------------------
 * react-router-config
 * ------------------------------------------------------------------
 */
import App from './app';
import Home from './page/home';

module.exports = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      }
    ]
  }
];
