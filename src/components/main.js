import 'babel/polyfill';
import NodecmsApp from './NodecmsApp';
import React from 'react';
import Router from 'react-router';

let Route = Router.Route;
let content = document.getElementById('content');

let Routes = (
  <Route handler={NodecmsApp}>
    <Route name="/" handler={NodecmsApp}/>
  </Route>
);

Router.run(Routes, function(Handler) {
    React.render(<Handler/>, content);
});
