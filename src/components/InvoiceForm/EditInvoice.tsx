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


const EditInvoiceBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;


const EditInvoice = () => {
    const { t } = useTranslation();
    const { id } : any = useParams();

    const { data: invoice, isLoading: isLoading, isError: isError } = useGetInvoice({ id } as GetInvoiceQueryParams);

    const mutation = useMutation({
        mutationFn: (invoice) => {
          return axios.put(`http://localhost:3001/invoices/${id}`, invoice)
        },
      })

    const onSubmit = (data: any) => { 
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
            <InvoiceForm initialValues={invoice!} onSubmit={onSubmit} />
        </EditInvoiceBox>
    )
};

export default EditInvoice;

