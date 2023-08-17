import { useQuery } from 'react-query';
import axios from 'axios';

import { InvoiceFormType } from './InvoiceForm/defaultValues';


export type GetInvoiceQueryParams = {
  id: string;
}

const QUERY_KEY = ['Invoice'];

const fetchInvoice = async (params: GetInvoiceQueryParams): Promise<InvoiceFormType> => {
  const { data } = await axios.get(`http://localhost:3001/invoices/${params.id}`);
  return data;
};

export const useGetInvoice = (params: GetInvoiceQueryParams) => {
  return useQuery<InvoiceFormType, Error>(QUERY_KEY, () => fetchInvoice(params));
};
