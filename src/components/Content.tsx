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

  interface ComponentMap {
    [key: string]: React.ComponentType<any>;
  }

  const componentMap: ComponentMap = {
      'InvoicesList': InvoicesList,
      'AddInvoice': AddInvoice,
      'EditInvoice': EditInvoice,
      'ShowInvoice': ShowInvoice,
      'PageNotFound': PageNotFound,
  }

  function getComponentByName(name:string) {
    const Component = componentMap[name];
    if (Component) {
      return <Component />;
    } else {
      return null;
    }
  }

  const routing_map = {
    '/': 'InvoicesList',
    '/invoice': 'AddInvoice',
    '/invoice/:id': 'EditInvoice',
    '/invoice/:id/preview': 'ShowInvoice',
    '*': 'PageNotFound',
  };

  return (
      <Routes>
        {Object.entries(routing_map).map(([path, componentName]) => (
          <Route key={path} path={path} element={getComponentByName(componentName)} />
        ))}
      </Routes>
  )
}

export default Content;