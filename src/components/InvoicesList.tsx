import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
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

const InvocesListBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;


const invoicesList = [
    ['1/07', '2023-06-01', '2023-06-14', 1],
    ['2/07', '2023-07-01', '2023-07-14', 1],
    ['3/07', '2023-08-01', '2023-08-14', 1]
]


const InvoicesList = () => {
    const { t } = useTranslation()

    return (
        <InvocesListBox>
            <h2>{t('invoices')}</h2>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>{t('no')}</TableCell>
                    <TableCell>{t('created')}</TableCell>
                    <TableCell>{t('valid')}</TableCell>
                    <TableCell>{t('amount')}</TableCell>
                    <TableCell align="center">{t('actions')}</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {invoicesList.map((item, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{item[0] }</TableCell>
                        <TableCell>{item[1] }</TableCell>
                        <TableCell>{item[2] }</TableCell>
                        <TableCell>{item[3] }</TableCell>
                        <TableCell align="center">
                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>
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