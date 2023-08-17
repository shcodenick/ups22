import { useQuery } from 'react-query';
import axios from 'axios';

import { InvoicesListType } from './InvoiceForm/defaultValues';


const QUERY_KEY = ['Invoices'];

const fetchInvoices = async (): Promise<InvoicesListType> => {
  const { data } = await axios.get('http://localhost:3001/invoices');
  return data;
};

const useGetInvoices = () => {
  return useQuery<InvoicesListType, Error>(QUERY_KEY, () => fetchInvoices());
};

export default useGetInvoices;