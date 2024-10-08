import React from 'react';
import { useMutation } from 'react-query';
import defaultValues, { InvoiceFormType } from './defaultValues';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import InvoiceForm from "./InvoiceForm";


const AddInvoiceBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;

const AddInvoice = () => {
    const { t } = useTranslation();

    const mutation = useMutation({
        mutationFn: (newInvoice: InvoiceFormType) => {
          return axios.post('http://localhost:3001/invoices', newInvoice)
        },
      })

    const onSubmit = (data: InvoiceFormType) => { 
        mutation.mutate(data); 
        alert(t('invoice_added'));
    }

    return (
        <AddInvoiceBox>
            <h2>{t('newinvoice')}</h2>
            <InvoiceForm initialValues={defaultValues} onSubmit={onSubmit} disabled={false}/>
        </AddInvoiceBox>
    )
};

export default AddInvoice;
