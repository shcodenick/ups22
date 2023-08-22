import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import Loading from '../Loading';
import LoadingError from '../LoadingError';
import InvoiceForm from "./InvoiceForm";
import { useGetInvoice, GetInvoiceQueryParams } from "../useGetInvoice";

import { InvoiceFormType } from './defaultValues';


const EditInvoiceBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;


const EditInvoice = () => {
    const { t } = useTranslation();
    const params = useParams();
    const id = params.id;

    const { data: invoice, isLoading: isLoading, isError: isError } = useGetInvoice({ id } as GetInvoiceQueryParams);

    const mutation = useMutation({
        mutationFn: (invoice: InvoiceFormType) => {
          return axios.put(`http://localhost:3001/invoices/${id}`, invoice)
        },
      })

    const onSubmit = (data: InvoiceFormType) => { 
        mutation.mutate(data); 
        alert(t('changes_saved'));
    }

    if (isLoading) {
        return <Loading />;
    }
    
    if (isError) {
        return <LoadingError />;
    }

    return (
        <EditInvoiceBox>
            <h2>{t('edit_invoice')} {id}</h2>
            {invoice && <InvoiceForm initialValues={invoice} onSubmit={onSubmit} />}
        </EditInvoiceBox>
    )
};

export default EditInvoice;

