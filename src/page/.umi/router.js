import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../Layout/BasicLayout').default,
    "routes": [
      {
        "path": "/",
        "component": require('../HelloWorld').default,
        "exact": true
      },
      {
        "path": "/helloworld/:id",
        "component": require('../HelloWorld').default,
        "exact": true
      },
      {
        "path": "/modeView",
        "component": require('../modeView').default,
        "exact": true
      },
      {
        "path": "/demo",
        "routes": [
          {
            "path": "/demo/view1",
            "component": require('../demo/view1').default,
            "exact": true
          },
          {
            "path": "/demo/view2",
            "component": require('../demo/view2').default,
            "exact": true
          },
          {
            "path": "/demo/view3",
            "component": require('../demo/view3').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/xiaos/WebstormProjects/MaybeAI/node_modules/.1.0.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/api",
        "routes": [
          {
            "path": "/api/cal",
            "component": require('../api/cal').default,
            "exact": true
          },
          {
            "path": "/api/params",
            "component": require('../api/params').default,
            "exact": true
          },
          {
            "path": "/api/params/v2",
            "component": require('../api/newParams').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/xiaos/WebstormProjects/MaybeAI/node_modules/.1.0.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/xiaos/WebstormProjects/MaybeAI/node_modules/.1.0.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/xiaos/WebstormProjects/MaybeAI/node_modules/.1.0.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
