import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import InvoicesList from './InvoicesList';
import AddInvoice from './InvoiceForm/AddInvoice';
import EditInvoice from './InvoiceForm/EditInvoice';
import ShowInvoice from './ShowInvoice';
import PageNotFound from './PageNotFound';
  
const Content = () => {
  type RouteKeyType = keyof typeof componentMap;
  type RoutingMapType = {
    route: string,
    componentName: RouteKeyType
  }

  const componentMap = {
      InvoicesList: InvoicesList,
      AddInvoice: AddInvoice,
      EditInvoice: EditInvoice,
      ShowInvoice: ShowInvoice,
      PageNotFound: PageNotFound,
  }

  function getComponentByName(name: RouteKeyType) {
    const Component = componentMap[name];
    if (Component) {
      return <Component />;
    } else {
      return null;
    }
  }

  const routing_map: RoutingMapType[] = [
    {route: '/', componentName: 'InvoicesList'},
    {route: '/invoice', componentName: 'AddInvoice'},
    {route: '/invoice/:id', componentName: 'EditInvoice'},
    {route: '/invoice/:id/preview', componentName: 'ShowInvoice'},
    {route: '*', componentName: 'PageNotFound'},
  ];

  return (
      <Routes>
          {routing_map.map(({ route, componentName }) => (
              <Route key={route} path={route} element={getComponentByName(componentName)} />
          ))}
      </Routes>
  )
}

export default Content;