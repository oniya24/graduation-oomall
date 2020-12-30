import React, { Component } from 'react';

// import { createBrowserHistory } from 'history'
import { history } from 'umi';
import { Route, Switch } from 'react-router-dom';
import { blankRoutes as routers } from '../../Routes/routers.js';
import TopBar from '../../components/TopBar';
import '../BasicLayout/index.scss';

import { matchRoute } from '../../Routes/matchRoutes';

const BlankLayout = () => {
  console.log(history, routers);
  const { location } = history;
  const match = matchRoute(routers, location);
  console.log(match);
  const { title, showTopBar } = match;
  return (
    <div className={`blankLayout layout`}>
      {showTopBar && <TopBar title={title} routers={routers}></TopBar>}
      <article>
        <Switch>
          {routers.map(item => {
            return item.guard ? (
              <item.guard
                key={item.path}
                path={item.path}
                component={item.components}
                {...item.props}
              ></item.guard>
            ) : (
              <Route
                key={item.path}
                path={item.path}
                component={item.components}
                {...item.props}
              ></Route>
            );
          })}
        </Switch>
      </article>
    </div>
  );
};

export default BlankLayout;
