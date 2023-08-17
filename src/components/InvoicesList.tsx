import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import useGetInvoices from './useGetInvoices';
import Loading from './Loading';
import LoadingError from './LoadingError';

const InvocesListBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;


const InvoicesList = () => {
    const { t } = useTranslation()
    const { data: data, isLoading: isLoading, isError: isError } = useGetInvoices();

    if (isLoading) {
        return <Loading />;
    }
    
    if (isError) {
        return <LoadingError />;
    }

    return (
        
        <InvocesListBox>
            <h4>{t('welcome')}</h4>
            <h2>{t('invoices')}</h2>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>{t('no')}</TableCell>
                    <TableCell>{t('created')}</TableCell>
                    <TableCell>{t('valid')}</TableCell>
                    <TableCell>{t('amount')}</TableCell>
                    <TableCell align="center">{t('actions')}</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data!.map((item: any, index: number) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{item.id }</TableCell>
                        <TableCell>{item.no }</TableCell>
                        <TableCell>{item.created }</TableCell>
                        <TableCell>{item.valid }</TableCell>
                        <TableCell>{item.amount }</TableCell>
                        <TableCell align="center">
                            <Link to={`http://localhost:3000/invoice/${item.id}`}>
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </InvocesListBox>
    );
};
  

export default InvoicesList;