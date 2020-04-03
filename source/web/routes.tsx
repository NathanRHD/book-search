import * as React from "react";
import { Route, IndexRoute } from "react-router";

import { Home } from "./components/views/home";
import { Details } from "./components/views/details";
import { ViewBook } from "./components/views/view-book";

export interface RouteDefinition {
  path?: string;
  component?: React.ComponentType<any>;
  childRoutes?: RouteDefinition[];
  __IGNORE_ON_SERVER?: boolean;
}

export const IndexPath = "__INDEX";

export const routesDefinitions: RouteDefinition[] = [
  {
    component: Home,
    path: "/",
    childRoutes: [
      {
        path: "details",
        component: Details,
        childRoutes: [
          {
            path: ":id",
            component: ViewBook.Component
          }
        ]
      }
    ]
  }
];

const routeComponentBuilder = (routeDefinitions: RouteDefinition[]) => {
  const routeComponents = routeDefinitions.map(routeDefinition => {
    const childRouteComponents = !routeDefinition.childRoutes
      ? []
      : routeComponentBuilder(routeDefinition.childRoutes);

    if (routeDefinition.component) {
      return routeDefinition.path === IndexPath ? (
        <IndexRoute component={routeDefinition.component} />
      ) : (
        <Route
          path={routeDefinition.path}
          component={routeDefinition.component}
        >
          {...childRouteComponents}
        </Route>
      );
    }

    return <Route path={routeDefinition.path}>{...childRouteComponents}</Route>;
  });

  return routeComponents;
};

export const routeComponents = routeComponentBuilder(routesDefinitions);
