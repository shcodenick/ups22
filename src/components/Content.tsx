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

  return (
      <Routes>
        <Route path="/" element={<InvoicesList />} />
        <Route path="/invoice" element={<InvoiceForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  )
}

export default Content;