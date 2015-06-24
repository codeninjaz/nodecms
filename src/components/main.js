import 'babel/polyfill';
import NodecmsApp from './NodecmsApp';
import CrawlTest from './CrawlTest';
import React from 'react';
import Router from 'react-router';

let Route = Router.Route;
let content = document.getElementById('content');

let Routes = (
  <Route path="/" handler={NodecmsApp}>
    <Route path="crawl" handler={CrawlTest}/>
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, content);
});
