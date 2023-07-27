import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import InvoicesList from './InvoicesList';
import InvoiceForm from './InvoiceForm';
  
  
const Content = () => {

  return (
      <Routes>
        <Route path="/" element={<InvoicesList />} />
        <Route path="/invoice" element={<InvoiceForm />} />
      </Routes>
  )
}

export default Content;