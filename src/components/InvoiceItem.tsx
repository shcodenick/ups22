import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { TextField, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormContext } from "react-hook-form";

const InvoiceItemBox = styled.div`
    background-color: #FAE5D3;
    padding: 5px;
`;

const InvoiceItem = () => {
    const { t } = useTranslation();
    const { register } = useFormContext();

    return (
        <InvoiceItemBox>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label={t('name')}
                        variant="standard"
                        {...register('name[]')}
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('amount')}
                        variant="standard"
                        name="amount[]"
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('unit')}
                        variant="standard"
                        name="unit[]"
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('tax')}
                        variant="standard"
                        name="tax[]"
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('price')}
                        variant="standard"
                        name="price[]"
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label="delete" sx={{marginTop: '10px'}}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </InvoiceItemBox>
    );
};
  

export default InvoiceItem;