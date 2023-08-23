import { useQuery } from 'react-query';
import axios from 'axios';

import { InvoicesListType } from './InvoiceForm/defaultValues';
import { QUERY_KEYS } from '../constants';


const fetchInvoices = async (): Promise<InvoicesListType> => {
  const { data } = await axios.get('http://localhost:3001/invoices');
  return data;
};

const useGetInvoices = () => {
  return useQuery<InvoicesListType, Error>(QUERY_KEYS.INVOICES, () => fetchInvoices());
};

export default useGetInvoices;