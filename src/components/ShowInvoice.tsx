import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Loading from './Loading';
import LoadingError from './LoadingError';
import InvoiceForm from './InvoiceForm/InvoiceForm';
import { useGetInvoice, GetInvoiceQueryParams } from "./useGetInvoice";


const ShowInvoiceBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;


const ShowInvoice = () => {
    const { t } = useTranslation();
    const { id } : any = useParams();

    const { data: invoice, isLoading: isLoading, isError: isError } = useGetInvoice({ id } as GetInvoiceQueryParams);

    if (isLoading) {
        return <Loading />;
    }
    
    if (isError) {
        return <LoadingError />;
    }

    return (
        <ShowInvoiceBox>
            <h2>{t('invoice_details')} #{id}</h2>
            <InvoiceForm initialValues={invoice!} onSubmit={() => {return false;}} disabled={true} />
        </ShowInvoiceBox>
    )
};

export default ShowInvoice;

