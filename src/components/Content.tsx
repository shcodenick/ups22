import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import InvoicesList from './InvoicesList';
import InvoiceForm from './InvoiceForm';
import PageNotFound
 from './PageNotFound';
  
const Content = () => {

  const routing_map = {
    '/': InvoicesList,
    '/invoice': InvoiceForm,
    '*': PageNotFound,
  };

  return (
      <Routes>
        {Object.entries(routing_map).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component/>} />
        ))}
      </Routes>
  )
}

export default Content;