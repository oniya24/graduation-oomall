import allRouter from './routers';

function getAllRoutes() {
  let routersArray = [];
  // console.log(allRouter);
  for (let i = 0; i < allRouter.length; i++) {
    routersArray = routersArray.concat(allRouter[i].routes);
  }
  return routersArray;
}

export const matchAllRoute = currentLocation => {
  const allRoutes = getAllRoutes();
  for (let i = 0; i < allRoutes.length; i++) {
    let item = allRoutes[i];
    if (item.path === currentLocation.pathname) {
      return item;
    }
  }
  return {};
};

export const matchRoute = (routers, currentLocation) => {
  for (let i = 0; i < routers.length; i++) {
    let item = routers[i];
    if (item.path === currentLocation.pathname) {
      return item;
    }
  }
  return null;
};
